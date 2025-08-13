# 🌟 Test de Personalidades

Una aplicación web para identificar temperamentos dominantes basada en los cuatro tipos de personalidad clásicos: León, Mono, Labrador y Castor.

## 🎯 ¿Qué es?

Este test ayuda a las personas a identificar su temperamento dominante a través de un cuestionario interactivo. Está basado en la teoría de los cuatro temperamentos clásicos y proporciona resultados detallados con características, fortalezas y debilidades de cada tipo.

## 🦁 Los Cuatro Temperamentos

- **🦁 León (Colérico)**: Líder natural, decidido, orientado a resultados
- **🐒 Mono (Sanguíneo)**: Espontáneo, sociable, entusiasta
- **🐕 Labrador (Flemático)**: Leal, estable, colaborativo
- **🦫 Castor (Melancólico)**: Perfeccionista, analítico, detallista

## 🚀 Características de la App

### ✨ Funcionalidades Principales
- Test interactivo con preguntas aleatorias
- Gráfico de barras para visualizar resultados
- Exportación de resultados en PDF
- Descripciones detalladas de cada temperamento
- Enlaces mágicos para compartir resultados
- Navegación entre preguntas (adelante/atrás)
- Interfaz responsive y moderna

### 🎨 Experiencia del Usuario
- Pantalla de bienvenida atractiva
- Progreso visual durante el test
- Resultados ordenados por dominancia
- Detalles expandibles de cada temperamento
- Botones para copiar enlaces y compartir

## 🧮 Lógica de Cálculo

### Escala de Respuestas
Cada pregunta usa una escala de 1-4:
- **1**: Casi nunca
- **2**: A veces
- **3**: Frecuentemente  
- **4**: Casi siempre

### Normalización de Puntos
El sistema convierte la escala 1-4 a 0-3 puntos:
```javascript
const puntosNormalizados = respuestaUsuario - 1; // 1→0, 2→1, 3→2, 4→3
```

### Distribución de Preguntas
- Las preguntas se mezclan aleatoriamente para evitar patrones
- Cada temperamento tiene el mismo número de preguntas
- El cálculo se basa en preguntas realmente respondidas

### Cálculo Final
```javascript
// Para cada temperamento
puntajes[grupoTemperamento] += puntosNormalizados;

// Ordenamiento por puntaje descendente
temperamentos.sort((a,b) => b.puntaje - a.puntaje);
```

### Ejemplo de Cálculo
Si un usuario responde:
- León: 3 preguntas → puntos [2, 1, 3] = **6 puntos total**
- Mono: 3 preguntas → puntos [0, 0, 1] = **1 punto total**
- Labrador: 3 preguntas → puntos [1, 2, 2] = **5 puntos total**
- Castor: 3 preguntas → puntos [0, 1, 0] = **1 punto total**

**Resultado**: León dominante (6 pts), Labrador secundario (5 pts)

## 🔗 Enlaces Mágicos (Magic Links)

La aplicación permite compartir resultados específicos mediante URLs:

### Formato de URL
```
/result.html?scores=leon-6.mono-1.labrador-5.castor-1&detail=leon
```

### Parámetros
- `scores`: Puntuación de cada temperamento en formato `animal-puntos`
- `detail`: Temperamento a mostrar en detalle (opcional)

### Normalización
Los nombres se normalizan para URLs limpias:
- Quita acentos: `León` → `leon`
- Convierte a minúsculas
- Usa guiones en lugar de dos puntos para URLs más limpias

## 🏗️ Arquitectura Técnica

### Estructura de Archivos
```
/
├── index.html          # Página de bienvenida + redirección
├── test.html          # Cuestionario interactivo
├── result.html        # Visualización de resultados
├── descriptions.html  # Descripciones de temperamentos
├── style.css         # Estilos globales
├── data.js          # Datos de temperamentos y preguntas
├── test.js          # Lógica del cuestionario
├── result.js        # Lógica de resultados y gráficos
├── descriptions.js  # Lógica de descripciones
└── app.js          # Código legacy (en proceso de refactoring)
```

### Tecnologías Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Gráficos**: Chart.js
- **PDF**: jsPDF
- **Hosting**: AWS S3 + CloudFront

### Flujo de Navegación
1. **Bienvenida** (`index.html`) → **Test** (`test.html`)
2. **Test** completa → **Resultados** (`result.html`) 
3. Desde cualquier página → **Descripciones** (`descriptions.html`)

## 📊 Integración de Chart.js

### Configuración del Gráfico
```javascript
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: temperamentos.map(t => `${emoji} ${nombre}`),
    datasets: [{
      label: 'Puntuación',
      data: datosNormalizados, // Proporcional al máximo = 100%
      backgroundColor: ['#ff9800','#2196f3','#4caf50','#9c27b0']
    }]
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => `${puntosReales[ctx.dataIndex]} puntos`
        }
      }
    }
  }
});
```

### Normalización Visual
- Las barras se escalan proporcionalmente (dominante = 100%)
- Los tooltips muestran puntos reales, no porcentajes
- Colores distintivos para cada temperamento

## 📄 Generación de PDF

### Contenido del PDF
- **Página 1**: Resultados personalizados con gráfico
- **Página 2**: Descripciones completas de todos los temperamentos

### Implementación
```javascript
const { jsPDF } = window.jspdf;
const doc = new jsPDF();

// Generar contenido personalizado
doc.text(`Tu temperamento dominante: ${dominante}`, 20, 30);
// ... agregar gráfico como imagen
// ... agregar descripciones detalladas
```

## 🚀 Deployment

### Requisitos
- **AWS S3** bucket configurado para hosting web estático
- **AWS CloudFront** para CDN y HTTPS (recomendado)
- **AWS CLI** configurado

### Scripts de Deploy

#### Producción
```bash
# Sincronizar archivos
aws s3 sync . s3://tu-bucket-prod/ \
  --exclude "*.md" \
  --exclude ".git/*" \
  --cache-control "max-age=86400"

# Invalidar cache de CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

#### Staging
```bash
aws s3 sync . s3://tu-bucket-staging/ \
  --exclude "*.md" \
  --exclude ".git/*"
```

### Configuración de S3

#### Website Hosting
```bash
aws s3 website s3://tu-bucket/ \
  --index-document index.html \
  --error-document index.html
```

#### Política de Bucket (Público)
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicRead",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::tu-bucket/*"
  }]
}
```

### Variables de Entorno
```bash
# En tu shell o CI/CD
export AWS_PROFILE=tu-perfil
export BUCKET_PROD=test-personalidades-prod
export BUCKET_STAGING=test-personalidades-staging
export CLOUDFRONT_DIST_ID=E1234567890ABC
```

### URLs de Deploy
- **Producción**: `https://tu-dominio.com/test-personalidades/`
- **Staging**: `https://tu-bucket-staging.s3-website.region.amazonaws.com/`
- **S3 Direct**: `https://tu-bucket.s3.amazonaws.com/index.html`

## 🛠️ Desarrollo Local

### Setup
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/test-personalidades.git
cd test-personalidades

# Servir localmente (Python 3)
python -m http.server 8000

# O con Node.js
npx serve .

# Acceder a http://localhost:8000
```

### Testing
- Probar en diferentes dispositivos y navegadores
- Verificar magic links en diferentes escenarios
- Validar exportación PDF en múltiples navegadores
- Comprobar accesibilidad y responsive design

## 📈 Funcionalidades Futuras

- [ ] Guardar historial de tests (LocalStorage)
- [ ] Comparar resultados entre tests
- [ ] Versión en inglés
- [ ] Integración con redes sociales
- [ ] Analytics y métricas de uso
- [ ] Tests más especializados (por profesión, edad, etc.)
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👏 Créditos

- Teoría de temperamentos basada en estudios clásicos de personalidad
- Iconos de animales: Unicode Emoji
- Gráficos: Chart.js
- PDF: jsPDF
- Hosting: AWS S3 + CloudFront