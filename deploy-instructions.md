# 🚀 Instrucciones de Deployment a AWS S3

## 📋 Requisitos previos

### 1. AWS S3 Bucket
Crear un bucket S3 configurado para hosting web estático:

```bash
# Opción 1: Crear bucket en us-east-1 (más simple)
aws s3 mb s3://test-personalidades-app

# Opción 2: Crear bucket en otra región (especificar constraint)
aws s3api create-bucket \
  --bucket test-personalidades-app \
  --region us-west-2 \
  --create-bucket-configuration LocationConstraint=us-west-2

aws s3api create-bucket \
  --bucket test-personalidades-app-staging \
  --region us-west-2 \
  --create-bucket-configuration LocationConstraint=us-west-2

# Habilitar website hosting
aws s3 website s3://test-personalidades-app \
  --index-document index.html \
  --error-document index.html

aws s3 website s3://test-personalidades-app-staging \
  --index-document index.html \
  --error-document index.html
```

### 2. IAM User y Política
Crear un usuario IAM con los siguientes permisos:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "S3BucketAccess",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::test-personalidades-app",
                "arn:aws:s3:::test-personalidades-app/*"
            ]
        },
        {
            "Sid": "CloudFrontInvalidation",
            "Effect": "Allow",
            "Action": [
                "cloudfront:CreateInvalidation"
            ],
            "Resource": "*"
        }
    ]
}
```

## 🔐 Configurar Secrets en GitHub

Ve a tu repositorio → Settings → Secrets and variables → Actions

Agrega estos secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `AWS_ACCESS_KEY_ID` | AWS Access Key del usuario IAM | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Key del usuario IAM | `wJalr...` |
| `S3_BUCKET_NAME` | Nombre del bucket S3 de producción | `test-personalidades-app` |
| `S3_STAGING_BUCKET_NAME` | Nombre del bucket S3 de staging (opcional) | `test-personalidades-staging` |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID de distribución CloudFront (opcional) | `E1234567890123` |

## 🌐 Configurar CloudFront Path-Based Routing

### Opción 1: Usar distribución existente (EZC41W4QNY2U)

#### Paso 1: Crear nuevo Origin para tu bucket S3
```bash
# Obtener configuración actual
aws cloudfront get-distribution-config \
  --id EZC41W4QNY2U > current-distribution.json

# Editar y agregar nuevo origin
```

#### Paso 2: Agregar Behavior Pattern para /test-personalidades/*
En AWS Console:
1. Ve a CloudFront → EZC41W4QNY2U → Behaviors
2. Create Behavior:
   - **Path Pattern**: `/test-personalidades/*`
   - **Origin**: S3-test-personalidades-app
   - **Viewer Protocol Policy**: Redirect HTTP to HTTPS
   - **Cache Policy**: Managed-CachingOptimized

### Opción 2: Crear nueva distribución CloudFront

Para mantener separación completa:

```bash
# Crear distribución CloudFront
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

Ejemplo de `cloudfront-config.json`:
```json
{
    "CallerReference": "test-personalidades-$(date +%s)",
    "Comment": "Test de Personalidades CDN",
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-test-personalidades-app",
        "ViewerProtocolPolicy": "redirect-to-https",
        "MinTTL": 0,
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        }
    },
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-test-personalidades-app",
                "DomainName": "test-personalidades-app.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100"
}
```

## 🔄 Workflow Automático

### Deployment a Producción
- **Trigger**: Push a rama `main`
- **Destino**: Bucket S3 principal
- **CloudFront**: Invalidación automática

### Deployment a Staging
- **Trigger**: Push a ramas `develop` o `staging`
- **Destino**: Bucket S3 de staging
- **Cache**: Headers no-cache para testing

## 🌍 URLs de Acceso

### Con path-based routing en distribución existente:
- **Producción**: `https://genteibba.com/test-personalidades/`
- **Direct S3**: `http://test-personalidades-app.s3-website-us-west-2.amazonaws.com`

### Con nueva distribución CloudFront:
- **CloudFront URL**: `https://d1234567890123.cloudfront.net`
- **S3 Website URL**: `http://test-personalidades-app.s3-website-us-west-2.amazonaws.com`

## 🔧 Comandos Útiles

### Deploy manual desde local:
```bash
# Sync a S3
aws s3 sync . s3://test-personalidades-app \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude "docs/*" \
  --delete

# Invalidar CloudFront
aws cloudfront create-invalidation \
  --distribution-id E1234567890123 \
  --paths "/*"
```

### Verificar deployment:
```bash
# Ver archivos en S3
aws s3 ls s3://test-personalidades-app/

# Ver estado de CloudFront
aws cloudfront get-distribution --id E1234567890123
```

## 💰 Costos Estimados

- **S3**: ~$0.02/mes (para app pequeña)
- **CloudFront**: ~$0.50/mes (primeros 50GB gratis)
- **Total**: < $1/mes para tráfico normal

## 🚨 Troubleshooting

### Error: Access Denied
- Verificar que el bucket tiene permisos de website público
- Confirmar que las credenciales IAM tienen permisos correctos

### Error: Files not updating
- Verificar que CloudFront invalidation está funcionando
- Comprobar cache headers en navegador

### Error: Workflow failed
- Revisar logs en GitHub Actions
- Verificar que todos los secrets están configurados