// Estructura de datos del test
const temperamentos = [
  {
    name: "León",
    animal: "León",
    questions: [
       "¿Tomo el control cuando algo necesita hacerse?",
        "¿Me impacienta que otros tarden en decidir?",
        "¿Actúo rápido en lugar de esperar o pensar demasiado?",
        "¿Pierdo la paciencia con personas que van lento?",
        "¿Prefiero liderar antes que seguir instrucciones?",
        "¿Hago las cosas a mi manera sin consultar a los demás?",
        "¿Me frustro cuando otros no hacen las cosas como yo espero?",
        "¿Digo las cosas de forma directa aunque suene fuerte?",
        "¿Me pongo metas altas y espero lo mismo de los demás?",
        "¿Me cuesta aceptar cuando cometo errores?",
        "¿Evito pedir perdón incluso si sé que me equivoqué?",
        "¿Prefiero hacerlo yo mismo si creo que otros no lo harán bien?",
        "¿Digo lo que pienso sin rodeos?",
        "¿Evito mostrarme débil o vulnerable frente a otros?",
        "¿Pienso que puedo hacer las cosas mejor que los demás?",
        "¿Presiono para que todo se haga rápido?",
        "¿Me molesta cuando los planes no salen como quiero?",
        "¿Valoro más los resultados que los sentimientos de los demás?",
        "¿Me desanimo si pierdo el control de una situación?",
        "¿Resuelvo los problemas sin depender de nadie?",
        "¿Disfruto tomar decisiones importantes?",
        "¿Actúo con firmeza aunque a otros no les guste?",
        "¿Creo que casi todos los problemas tienen una solución rápida?",
        "¿Me cuesta dejar el control de un proyecto en manos de otros?",
        "¿Me enojo cuando veo que otros no se esfuerzan como yo?",
        "¿Sigo avanzando aunque los demás quieran descansar?",
        "¿Compito incluso en cosas pequeñas?",
        "¿Me molesta cuando alguien más tiene el mando?",
        "¿Tomo el liderazgo aunque nadie me lo pida?",
        "¿Me enojo cuando alguien me lleva la contraria?"
    ]
  },
  {
    name: "Mono",
    animal: "Mono",
    questions: [
        "¿Digo cosas sin pensar si pueden molestar?",
        "¿Hago reír o entretengo a los demás?",
        "¿Disfruto estar rodeado de personas y conversar?",
        "¿Me aburro cuando algo se vuelve repetitivo?",
        "¿Empiezo cosas con entusiasmo pero no las termino?",
        "¿Prefiero iniciar cosas nuevas en lugar de continuar con lo mismo?",
        "¿Exagero historias para que sean más divertidas?",
        "¿Hablo más de lo que escucho?",
        "¿Me distraigo fácilmente?",
        "¿Olvido lo que prometí?",
        "¿Hago varias cosas al mismo tiempo sin terminarlas?",
        "¿Pierdo la noción del tiempo y llego tarde?",
        "¿Mantengo desorden en mi espacio personal?",
        "¿Actúo según lo que siento en el momento?",
        "¿Me cuesta seguir una rutina durante varios días?",
        "¿Busco ser el centro de atención en grupos?",
        "¿Cambio de ánimo con facilidad?",
        "¿Hablo mucho sobre mí en las conversaciones?",
        "¿Evito conversaciones serias porque me aburren o incomodan?",
        "¿Me cuesta decir que no cuando me invitan a algo divertido?",
        "¿Prefiero improvisar en lugar de seguir instrucciones?",
        "¿Pido disculpas solo cuando no tengo otra opción?",
        "¿Uso el humor para no hablar de temas que me duelen?",
        "¿Tengo dificultad para concentrarme mucho tiempo?",
        "¿Reacciono con mucha emoción por cosas pequeñas?",
        "¿Digo cosas sin pensar si pueden afectar a alguien?",
        "¿Me gusta conocer gente nueva pero luego pierdo contacto?",
        "¿Evito comprometerme porque siento que pierdo libertad?",
        "¿Pongo excusas cuando no cumplo algo?",
        "¿Siento que algo no vale la pena si no es divertido?"
    ]
  },
  {
    name: "Labrador",
    animal: "Labrador",
    questions: [
        "¿Prefiero seguir a otros en lugar de tomar el liderazgo?",
        "¿Dudo al tomar decisiones por mi cuenta?",
        "¿Evito discutir aunque crea que tengo razón?",
        "¿Me adapto a lo que dicen los demás para evitar problemas?",
        "¿Me preocupo por lo que podría pasar?",
        "¿Prefiero que todo siga igual antes que enfrentar cambios?",
        "¿Digo “sí” aunque no quiero, por miedo a incomodar?",
        "¿Evito llamar la atención en grupos o actividades?",
        "¿Dejo pasar retos aunque sé que podría intentarlo?",
        "¿Me siento mal cuando alguien se enoja conmigo?",
        "¿Pongo primero las necesidades de otros antes que las mías?",
        "¿Callo lo que pienso para no perder la paz?",
        "¿Evito actuar por miedo a equivocarme?",
        "¿Prefiero trabajar en grupo antes que hacerlo solo?",
        "¿Observo más de lo que hablo cuando estoy con otras personas?",
        "¿Me quedo como estoy si ya me siento cómodo?",
        "¿Me afecta cuando alguien me critica?",
        "¿Evito cambiar mi rutina si ya funciona como está?",
        "¿Me siento culpable al tomar decisiones que afectan a otros?",
        "¿Evito conflictos incluso si eso me afecta?",
        "¿Prefiero que alguien más hable por mí en público?",
        "¿No digo lo que realmente quiero o necesito?",
        "¿Dejo que otros decidan por mí?",
        "¿Me siento mejor en ambientes tranquilos y sin sorpresas?",
        "¿Trato de ser amable incluso si estoy cansado o molesto?",
        "¿Pienso más en los demás que en mí mismo?",
        "¿Los cambios me hacen sentir inestable emocionalmente?",
        "¿Evito comprometerme porque no estoy seguro de poder cumplir?",
        "¿Me cuesta tomar decisiones rápidas?",
        "¿Prefiero mantener la calma antes que expresar lo que pienso?"
    ]
  },
  {
    name: "Castor",
    animal: "Castor",
    questions: [
       "¿Reviso los detalles antes de tomar decisiones?",
      "¿Me molesta que las cosas estén mal hechas?",
      "¿Me frustro cuando otros no siguen las reglas?",
      "¿Exijo mucho de mí mismo y de los demás?",
      "¿Desconfío de que otros hagan bien su parte?",
      "¿Prefiero hacer las cosas solo para asegurarme de que queden bien?",
      "¿Planifico todo con anticipación?",
      "¿Evito cambiar de planes en el último momento?",
      "¿Me pongo nervioso cuando tengo que improvisar?",
      "¿Reviso mi trabajo varias veces para evitar errores?",
      "¿Me siento mal si algo no queda perfecto?",
      "¿Soy muy duro conmigo cuando cometo errores?",
      "¿Prefiero hacer las cosas despacio pero bien hechas?",
      "¿Dificulto mostrar lo que siento?",
      "¿Parezco frío o seco con otras personas?",
      "¿Me molestan los espacios desordenados o ruidosos?",
      "¿Guardo rencor cuando alguien rompe una regla importante?",
      "¿Guardo mis emociones para mí?",
      "¿Evito lugares caóticos o desorganizados?",
      "¿Prefiero que algo esté bien hecho aunque tome más tiempo?",
      "¿Detecto los errores más que los aciertos?",
      "¿Cumplo mis promesas aunque me cueste?",
      "¿Me gusta trabajar en lugares tranquilos?",
      "¿No me gusta hacer algo si no entiendo para qué sirve?",
      "¿Me enojo cuando otros hacen las cosas de forma incorrecta?",
      "¿Evito decidir si no tengo toda la información?",
      "¿Desconfío de personas que improvisan constantemente?",
      "¿Siento que tengo que hacer las cosas muy bien para que me respeten?",
      "¿Busco mejorar lo que ya funciona bien?",
      "¿Me molesta cuando algo está casi bien pero no perfecto?"
    ]
  }
];

// Descripciones detalladas de cada temperamento
const descripciones = {
  "León": {
    emoji: "🦁",
    titulo: "LEÓN",
    descripcion: "Líder nato, confiado, decidido, rápido, proactivo, agresivo. Toma decisiones por otros, tiene estándares altos, va al frente. Pone metas, espera que los demás entiendan sin explicar.",
    caracteristicas: [
      "Líder nato, confiado, decidido",
      "Rápido, proactivo, agresivo",
      "Toma decisiones por otros",
      "Tiene estándares altos, va al frente",
      "Pone metas, espera que los demás entiendan sin explicar"
    ],
    fortalezas: [
      "Activos y motivados por resultados",
      "Confianza en sí mismos y visión de futuro",
      "Valientes, organizados, decididos, productivos",
      "Buenos organizadores y ejecutores",
      "Pueden levantar a otros por su fuerza de carácter"
    ],
    debilidades: [
      "Carácter violento, insensibles, dominantes",
      "Arrogantes, cortantes, crueles, sarcásticos",
      "Altivos, no dialogan fácilmente",
      "Les disgusta el sentimentalismo (lágrimas)",
      "Toman decisiones sin consultar, obligan a otros a su plan",
      "Su exceso de seguridad deja poco espacio para Dios"
    ],
    desarrollo: [
      "Que las personas valen más que los proyectos",
      "Que no puede imponer su ritmo a todos",
      "Humildad y sensibilidad (2 Timoteo 1:7)",
      "A dejar espacio para Dios en sus planes",
      "No ser dictatorial ni rígido",
      "A perdonar y escuchar opiniones"
    ]
  },
  "Mono": {
    emoji: "🐒",
    titulo: "MONO",
    descripcion: "Extrovertido, emocional, creativo, simpático, sociable. Hábil para levantar el ánimo, divertido, ama ser el centro. Viven en el presente, odian la rutina.",
    caracteristicas: [
      "Extrovertido, emocional, creativo",
      "Simpático, sociable",
      "Hábil para levantar el ánimo",
      "Divertido, ama ser el centro",
      "Viven en el presente, odian la rutina"
    ],
    fortalezas: [
      "Carismático, cálido, empático",
      "Comunicativo, alegre, creativo",
      "Buen animador en grupos y eventos",
      "Se lleva bien con todos, facilita el compañerismo",
      "Buen vendedor, habla de sí con entusiasmo"
    ],
    debilidades: [
      "Le cuesta pedir disculpas",
      "No termina lo que empieza",
      "Indisciplinado, no tiene control del tiempo",
      "Actúa por emociones, pierde el enfoque",
      "Se distrae fácilmente, habla demasiado de sí",
      "Rompe promesas, llega tarde, es impulsivo",
      "Exagera o miente para entretener",
      "Llora con facilidad, tiene arranques de enojo"
    ],
    desarrollo: [
      "Disciplina, estructura y constancia",
      "Terminar lo que empieza",
      "Ser puntual, organizado y confiable",
      "A reflexionar antes de actuar",
      "Tener dominio propio (Gálatas 5:23)",
      "Pensar en los demás antes de hablar o actuar"
    ]
  },
  "Labrador": {
    emoji: "🐕",
    titulo: "LABRADOR",
    descripcion: "Tranquilo, reservado, amable, buen oyente. Se adapta, evita conflictos, valora la paz. Busca relaciones profundas, fiel, cuidadoso.",
    caracteristicas: [
      "Tranquilo, reservado, amable",
      "Buen oyente",
      "Se adapta, evita conflictos",
      "Valora la paz",
      "Busca relaciones profundas, fiel, cuidadoso"
    ],
    fortalezas: [
      "Fiel, confiable, estable",
      "Equilibrado emocionalmente",
      "Buen consejero, escucha con atención",
      "Excelente compañía y apoyo emocional",
      "Planificador, metódico si se le exige",
      "Pacifista, busca el bien común"
    ],
    debilidades: [
      "Falta de iniciativa, pasividad",
      "Pesimista, se preocupa fácilmente",
      "Lento para actuar, se acomoda a circunstancias",
      "Evita comprometerse o tomar liderazgo",
      "Puede apagar el entusiasmo de otros",
      "Perezoso, lucha con la motivación",
      "Terco, reservado, le cuesta confiar"
    ],
    desarrollo: [
      "Iniciativa y decisión",
      "Salir de su zona de confort",
      "Tomar liderazgo cuando es necesario",
      "A confiar más en Dios y menos en la estabilidad externa",
      "Cultivar esperanza y gratitud",
      "Superar el miedo al cambio"
    ]
  },
  "Castor": {
    emoji: "🦫",
    titulo: "CASTOR",
    descripcion: "Detallista, disciplinado, estudioso, ama el orden. Analiza todo antes de actuar, perfeccionista. Le molesta el error y lo ilógico, exige sacrificio.",
    caracteristicas: [
      "Detallista, disciplinado, estudioso",
      "Ama el orden",
      "Analiza todo antes de actuar",
      "Perfeccionista",
      "Le molesta el error y lo ilógico, exige sacrificio"
    ],
    fortalezas: [
      "Analítico, lógico, creativo",
      "Buen planificador, perfeccionista en la ejecución",
      "Organizado, disciplinado, confiable",
      "Responsable, sabe sus limitaciones",
      "Se esfuerza por hacer todo con excelencia",
      "Valora la integridad y la verdad"
    ],
    debilidades: [
      "Mal humor, puede ser depresivo",
      "Tiende a criticar, se guarda resentimientos",
      "Indeciso, vive en el temor de fallar",
      "Rígido con sus estándares, poco práctico",
      "Le cuesta hacer amigos, desconfía",
      "Se siente superior moralmente",
      "Cree que su manera de hacer las cosas es la única correcta",
      "Se vuelve metiche o entrometido"
    ],
    desarrollo: [
      "Flexibilidad emocional y mental",
      "Entender que la perfección no es lo esencial",
      "Valorar a las personas por encima del sistema",
      "Confiar más en Dios y menos en su propio juicio",
      "No guardar rencor, aprender a soltar",
      "Aceptar y convivir con el error ajeno"
    ]
  }
};

// Equivalencias con temperamentos clásicos
const equivalenciasClasicas = {
  "León": "Colérico",
  "Mono": "Sanguíneo",
  "Labrador": "Flemático",
  "Castor": "Melancólico"
};

// Constantes de configuración
const CONFIG = {
  MIN_VALOR: 1,
  MAX_VALOR: 4,
  ANIMATION_DURATION: 200,
  DEBUG_MODE: false // Modo debug desactivado
};

// Variables del juego
let preguntasAleatorias = [];
let preguntaActual = 0;
let puntajes = [0, 0, 0, 0]; // León, Mono, Labrador, Castor
let respuestasUsuario = []; // Guardar respuestas para poder navegar hacia atrás

// Elementos del DOM (se inicializan cuando el DOM esté listo)
let welcomeScreen, testContent, btnStartTest, questionContainer, currentQuestionEl;
let answerSlider, btnNext, btnPrev, selectionText, progressFill, progressText, resultDiv;
let infoModal, btnInfo, btnCloseInfo, infoModalBody;

// Función para logging condicional
function debugLog(message, ...args) {
  if (CONFIG.DEBUG_MODE) {
    console.log(message, ...args);
  }
}

// Función para iniciar el test desde la pantalla de bienvenida
function iniciarTest() {
  debugLog('Iniciando test...');
  
  // Verificar que los elementos existan
  if (!welcomeScreen || !testContent) {
    console.error('Error: elementos del DOM no encontrados');
    return;
  }
  
  // Ocultar pantalla de bienvenida
  welcomeScreen.style.display = 'none';
  
  // Mostrar contenido del test
  testContent.style.display = 'block';
  
  // Generar preguntas aleatorias
  preguntasAleatorias = crearPreguntasAleatorias();
  
  // Mostrar primera pregunta
  mostrarPregunta();
  actualizarSeleccion();
  
  debugLog('Test iniciado correctamente');
}

// Función para mezclar array aleatoriamente
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Crear lista de preguntas con su grupo correspondiente
function crearPreguntasAleatorias() {
  const todasLasPreguntas = [];
  
  temperamentos.forEach((grupo, grupoIdx) => {
    grupo.questions.forEach((pregunta) => {
      todasLasPreguntas.push({
        pregunta: pregunta,
        grupoIdx: grupoIdx,
        animal: grupo.animal
      });
    });
  });
  
  return shuffleArray(todasLasPreguntas);
}

// Mostrar pregunta actual
function mostrarPregunta() {
  if (preguntaActual >= preguntasAleatorias.length) {
    mostrarResultado();
    return;
  }
  
  const preguntaObj = preguntasAleatorias[preguntaActual];
  currentQuestionEl.textContent = preguntaObj.pregunta;
  
  // Cargar respuesta anterior si existe, sino resetear a 1
  if (respuestasUsuario[preguntaActual]) {
    answerSlider.value = respuestasUsuario[preguntaActual];
  } else {
    answerSlider.value = 1;
  }
  actualizarSeleccion();
  
  // Actualizar botones de navegación
  btnPrev.disabled = preguntaActual === 0;
  
  // Actualizar barra de progreso
  const progreso = ((preguntaActual + 1) / preguntasAleatorias.length) * 100;
  progressFill.style.width = `${progreso}%`;
  progressText.textContent = `${Math.round(progreso)}% completado`;
}

// Función para validar valor de respuesta
function esValorValido(valor) {
  return valor >= CONFIG.MIN_VALOR && valor <= CONFIG.MAX_VALOR && !isNaN(valor);
}

// Responder pregunta (ir hacia adelante)
function responderPregunta() {
  const valorRespuesta = parseInt(answerSlider.value);
  
  // Validar que el valor esté en el rango correcto
  if (!esValorValido(valorRespuesta)) {
    console.error('Valor de respuesta inválido:', valorRespuesta);
    return; // No proceder si el valor es inválido
  }
  
  // Guardar respuesta actual
  respuestasUsuario[preguntaActual] = valorRespuesta;
  
  // Avanzar a la siguiente pregunta
  preguntaActual++;
  
  // Pequeña animación antes de mostrar la siguiente
  questionContainer.style.opacity = '0.5';
  setTimeout(() => {
    mostrarPregunta();
    questionContainer.style.opacity = '1';
  }, CONFIG.ANIMATION_DURATION);
}

// Ir a pregunta anterior
function preguntaAnterior() {
  if (preguntaActual > 0) {
    // Guardar respuesta actual antes de retroceder (con validación)
    const valorActual = parseInt(answerSlider.value);
    if (esValorValido(valorActual)) {
      respuestasUsuario[preguntaActual] = valorActual;
    }
    
    // Retroceder una pregunta
    preguntaActual--;
    
    // Pequeña animación antes de mostrar la anterior
    questionContainer.style.opacity = '0.5';
    setTimeout(() => {
      mostrarPregunta();
      questionContainer.style.opacity = '1';
    }, CONFIG.ANIMATION_DURATION);
  }
}

// Calcular puntajes basado en respuestas guardadas
function calcularPuntajes() {
  puntajes = [0, 0, 0, 0]; // Resetear puntajes
  
  preguntasAleatorias.forEach((preguntaObj, index) => {
    // Verificar si existe la respuesta (incluso si es 0)
    if (respuestasUsuario[index] !== undefined) {
      // Convertir escala 1-4 a 0-3 para mayor objetividad
      const puntosNormalizados = respuestasUsuario[index] - 1;
      puntajes[preguntaObj.grupoIdx] += puntosNormalizados;
    }
  });
}

// Variables para navegación de resultados
let temperamentosOrdenados = [];
let temperamentoActualDetalle = 0;

// Mostrar resultado final
function mostrarResultado() {
  debugLog('Mostrando resultados...');
  
  // Ocultar contenedores del test
  if (questionContainer) {
  questionContainer.style.display = 'none';
  }
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.display = 'none';
  }
  
  // Calcular puntajes finales basado en todas las respuestas
  calcularPuntajes();
  
  // Verificar que tenemos respuestas
  const totalRespuestas = respuestasUsuario.filter(r => r !== undefined).length;
  debugLog(`Total de respuestas: ${totalRespuestas}`);
  
  if (totalRespuestas === 0) {
    console.error('No se encontraron respuestas válidas');
    return;
  }
  
  // Crear array de temperamentos con puntajes y ordenar por puntaje
  temperamentosOrdenados = temperamentos.map((temp, idx) => ({
    ...temp,
    puntaje: puntajes[idx],
    posicion: idx
  })).sort((a, b) => b.puntaje - a.puntaje);
  
  debugLog('Temperamentos ordenados:', temperamentosOrdenados);
  // Total de puntos positivos (excluye "Casi Nunca" que suma 0)
  const totalPositivos = temperamentosOrdenados.reduce((sum, t) => sum + t.puntaje, 0);
  
  // Mostrar resultado principal
  mostrarResultadoPrincipal();
  
  // Asegurar que el div de resultados sea visible
  if (resultDiv) {
  resultDiv.style.display = 'block';
    // Forzar un reflow para asegurar que el contenido se renderice
    resultDiv.offsetHeight;
  }
  
  // Agregar event listeners a los elementos generados dinámicamente
  configurarEventListenersResultados();
  
  debugLog('Resultados mostrados correctamente');
}

function mostrarResultadoPrincipal() {
  if (!temperamentosOrdenados || temperamentosOrdenados.length === 0) {
    console.error('No hay temperamentos ordenados para mostrar');
    return;
  }
  
  const ganador = temperamentosOrdenados[0];
  debugLog('Ganador:', ganador);
  
  if (!resultDiv) {
    console.error('resultDiv no encontrado');
    return;
  }
  
  resultDiv.innerHTML = `
    <div class="resultado-container">
      <h2>¡Test Completado!</h2>
      <h3>Tu temperamento dominante es: ${descripciones[ganador.animal].emoji} ${ganador.animal} (${equivalenciasClasicas[ganador.animal]})</h3>
      
      <!-- Gráfico de barras -->
      <div class="grafico-container" style="margin: 20px 0;">
        <canvas id="chart-resultados" height="220"></canvas>
      </div>
      
      <!-- Resumen de puntajes -->
      <div class="puntajes-resumen">
        ${temperamentosOrdenados.map((temp, idx) => {
          // Calcular el número real de preguntas CONTESTADAS para este temperamento
          const preguntasContestadas = preguntasAleatorias.filter(p => p.grupoIdx === temp.posicion).length;
          const puntajeMaximo = preguntasContestadas * 3; // Máximo posible (escala 0-3)
          const porcentajeAbsoluto = puntajeMaximo > 0 ? Math.round((temp.puntaje / puntajeMaximo) * 100) : 0;
          const totalPos = temperamentosOrdenados.reduce((s, t2) => s + t2.puntaje, 0);
          const porcentajeRelativo = totalPos > 0 ? Math.round((temp.puntaje / totalPos) * 100) : 0;
          return `
            <div class="puntaje-item ${idx === 0 ? 'principal' : ''}" data-temperamento="${idx}">
              <span class="emoji">${descripciones[temp.animal].emoji}</span>
              <span class="nombre">${temp.animal} (${equivalenciasClasicas[temp.animal]})</span>
              <span class="puntos">${temp.puntaje} pts · ${porcentajeAbsoluto}% abs · ${porcentajeRelativo}% rel</span>
              <span class="posicion">${idx === 0 ? '1°' : idx === 1 ? '2°' : idx === 2 ? '3°' : '4°'}</span>
            </div>
          `;
        }).join('')}
      </div>
      
      <p style="margin: 20px 0; color: #666;">
        Haz clic en cualquier temperamento para ver su descripción detallada
      </p>
      <p style="margin: 10px 0; color: #666; font-style: italic;">
        Las personalidades utilizadas en este test (🦁 León, 🐒 Mono, 🐕 Labrador, 🦫 Castor) corresponden a los cuatro temperamentos clásicos: colérico, sanguíneo, flemático y melancólico, respectivamente.
      </p>
      
      <!-- Detalle del temperamento seleccionado -->
      <div id="detalle-temperamento">
        ${generarDetalleTemperamento(0)}
      </div>
      
      <div class="resultado-acciones">
        <button id="btn-descargar-pdf" class="btn-pdf">
          📄 Descargar PDF
        </button>
        <button id="btn-reiniciar" class="btn-reiniciar">
        🔄 Hacer test nuevamente
      </button>
      </div>
    </div>
  `;

  // Renderizar gráfico de barras con Chart.js
  try {
    const ctx = document.getElementById('chart-resultados');
    if (ctx && window.Chart) {
      const etiquetas = temperamentosOrdenados.map(t => `${descripciones[t.animal].emoji} ${t.animal}`);
      const totalPos = temperamentosOrdenados.reduce((s, t) => s + t.puntaje, 0);
      const datos = temperamentosOrdenados.map((t) => totalPos > 0 ? Math.round((t.puntaje / totalPos) * 100) : 0);

      // Destruir gráfico previo si existe
      if (window.__chartResultados) {
        window.__chartResultados.destroy();
      }

      window.__chartResultados = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: etiquetas,
          datasets: [{
            label: 'Porcentaje de afinidad',
            data: datos,
            backgroundColor: ['#ff9800', '#2196f3', '#4caf50', '#9c27b0'],
            borderRadius: 6,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { callback: (v) => v + '%' }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.parsed.y}%`
              }
            }
          }
        }
      });
    }
  } catch (e) {
    console.error('No se pudo renderizar el gráfico:', e);
  }
}

function mostrarDetalle(indice) {
  temperamentoActualDetalle = indice;
  document.getElementById('detalle-temperamento').innerHTML = generarDetalleTemperamento(indice);
  
  // Actualizar estilos de puntajes
  document.querySelectorAll('.puntaje-item').forEach((item, idx) => {
    item.classList.toggle('seleccionado', idx === indice);
  });
}

function generarDetalleTemperamento(indice) {
  const temp = temperamentosOrdenados[indice];
  const detalle = descripciones[temp.animal];
  const posiciones = ['🥇 PRINCIPAL', '🥈 SECUNDARIO', '🥉 TERCERO', '4️⃣ CUARTO'];
  
  return `
    <div class="detalle-card ${indice === 0 ? 'principal' : ''}">
      <div class="detalle-header">
        <h3>${detalle.emoji} ${detalle.titulo} (${equivalenciasClasicas[temp.animal]})</h3>
        <span class="badge-posicion ${indice === 0 ? 'principal' : ''}">${posiciones[indice]}</span>
        <div class="puntaje-grande">${temp.puntaje} puntos</div>
      </div>
      
      <div class="descripcion-general">
        <p>${detalle.descripcion}</p>
      </div>
      
      <div class="caracteristicas-grid">
        <div class="columna">
          <h4>✅ Características</h4>
          <ul>
            ${detalle.caracteristicas.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="fortalezas-debilidades">
        <div class="columna fortalezas">
          <h4>💪 Fortalezas</h4>
          <ul>
            ${detalle.fortalezas.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div class="columna debilidades">
          <h4>⚠️ Debilidades</h4>
          <ul>
            ${detalle.debilidades.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="desarrollo">
        <h4>🎯 Debe aprender/desarrollar</h4>
        <ul>
          ${detalle.desarrollo.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Reiniciar test
function reiniciarTest() {
  // Resetear todas las variables del estado
  preguntaActual = 0;
  puntajes = [0, 0, 0, 0];
  respuestasUsuario = [];
  preguntasAleatorias = [];
  temperamentosOrdenados = [];
  temperamentoActualDetalle = 0;
  
  // Limpiar contenido de resultados
  if (resultDiv) {
    resultDiv.innerHTML = '';
  resultDiv.style.display = 'none';
  }
  
  // Mostrar pantalla de bienvenida nuevamente
  if (welcomeScreen) {
    welcomeScreen.style.display = 'block';
  }
  if (testContent) {
    testContent.style.display = 'none';
  }
  
  debugLog('Test reiniciado correctamente');
}

// Función para generar PDF con los resultados
function generarPDF() {
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configuración del PDF
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;
    
    // Título principal
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('🌟 Test de Personalidades - Resultados 🌟', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;
    
    // Fecha
    const fecha = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Fecha: ${fecha}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;
    
    // Temperamento dominante
    const ganador = temperamentosOrdenados[0];
    const descripcionGanador = descripciones[ganador.animal];
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Tu temperamento dominante es:', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;
    
    doc.setFontSize(14);
    doc.text(`${ganador.animal} (${equivalenciasClasicas[ganador.animal]})`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;
    
    // Descripción del temperamento dominante
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const descripcionLineas = doc.splitTextToSize(descripcionGanador.descripcion, pageWidth - 40);
    doc.text(descripcionLineas, 20, yPosition);
    yPosition += descripcionLineas.length * 5 + 10;
    
    // Ranking de temperamentos
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Ranking de Temperamentos:', 20, yPosition);
    yPosition += 10;
    
    temperamentosOrdenados.forEach((temp, idx) => {
      const preguntasContestadas = preguntasAleatorias.filter(p => p.grupoIdx === temp.posicion).length;
      const puntajeMaximo = preguntasContestadas * 3;
      const porcentaje = Math.round((temp.puntaje / puntajeMaximo) * 100);
      const posicion = idx === 0 ? '1°' : idx === 1 ? '2°' : idx === 2 ? '3°' : '4°';
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${posicion} ${temp.animal} (${equivalenciasClasicas[temp.animal]})`, 25, yPosition);
      
      doc.setFont('helvetica', 'normal');
      doc.text(`${temp.puntaje} pts (${porcentaje}%)`, pageWidth - 60, yPosition);
      yPosition += 8;
    });
    
    yPosition += 10;
    
    // Características del temperamento dominante
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Características:', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    descripcionGanador.caracteristicas.forEach((caracteristica) => {
      const lineas = doc.splitTextToSize(`• ${caracteristica}`, pageWidth - 40);
      doc.text(lineas, 25, yPosition);
      yPosition += lineas.length * 4;
    });
    
    yPosition += 5;
    
    // Fortalezas
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Fortalezas:', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    descripcionGanador.fortalezas.forEach((fortaleza) => {
      const lineas = doc.splitTextToSize(`• ${fortaleza}`, pageWidth - 40);
      doc.text(lineas, 25, yPosition);
      yPosition += lineas.length * 4;
    });
    
    yPosition += 5;
    
    // Áreas de desarrollo
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Áreas de desarrollo:', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    descripcionGanador.desarrollo.forEach((desarrollo) => {
      const lineas = doc.splitTextToSize(`• ${desarrollo}`, pageWidth - 40);
      doc.text(lineas, 25, yPosition);
      yPosition += lineas.length * 4;
    });
    
    // Pie de página
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text('Test de Personalidades basado en los cuatro temperamentos clásicos', pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    // Descargar el PDF
    const nombreArchivo = `test-personalidades-${ganador.animal.toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(nombreArchivo);
    
    debugLog('PDF generado correctamente:', nombreArchivo);
    
  } catch (error) {
    console.error('Error al generar PDF:', error);
    alert('Hubo un error al generar el PDF. Por favor, intenta nuevamente.');
  }
}

// Función para configurar event listeners de resultados
function configurarEventListenersResultados() {
  // Usar un pequeño delay para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    // Event listeners para los items de puntaje
    const puntajeItems = document.querySelectorAll('.puntaje-item');
    debugLog(`Configurando ${puntajeItems.length} items de puntaje`);
    
    puntajeItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        const indice = parseInt(e.currentTarget.dataset.temperamento);
        if (!isNaN(indice)) {
          mostrarDetalle(indice);
        }
      });
    });
    
    // Event listener para el botón de PDF
    const btnDescargarPDF = document.getElementById('btn-descargar-pdf');
    if (btnDescargarPDF) {
      btnDescargarPDF.addEventListener('click', generarPDF);
      debugLog('Event listener para PDF configurado');
    }
    
    // Event listener para el botón de reiniciar
    const btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar) {
      btnReiniciar.addEventListener('click', reiniciarTest);
      debugLog('Event listener para reiniciar configurado');
    } else {
      console.warn('Botón reiniciar no encontrado');
    }
  }, 100);
}

// Función para actualizar la selección visual
function actualizarSeleccion() {
  const valor = parseInt(answerSlider.value);
  const textos = ['', 'Casi Nunca', 'Rara Vez', 'Frecuentemente', 'Casi Siempre'];
  const colores = ['', '#ff5722', '#ff9800', '#4caf50', '#2196f3']; // Colores correspondientes a la barra
  
  // Validar que el valor esté en el rango correcto
  if (esValorValido(valor)) {
  selectionText.textContent = textos[valor];
  selectionText.style.color = colores[valor];
  } else {
    // Valor por defecto si hay algún problema
    selectionText.textContent = textos[CONFIG.MIN_VALOR];
    selectionText.style.color = colores[CONFIG.MIN_VALOR];
    answerSlider.value = CONFIG.MIN_VALOR;
  }
  
  // Actualizar círculos de valores
  const valorSeguro = esValorValido(valor) ? valor : CONFIG.MIN_VALOR;
  document.querySelectorAll('.value-label').forEach((label, index) => {
    label.classList.toggle('active', index + 1 === valorSeguro);
  });
}

// Función para hacer clic en los números
function clickearValor(valor) {
  // Validar que el valor sea válido antes de asignar
  if (esValorValido(valor)) {
  answerSlider.value = valor;
  actualizarSeleccion();
}
}

// Función para inicializar todos los elementos del DOM y event listeners
function inicializarApp() {
  // Obtener referencias a los elementos del DOM
  welcomeScreen = document.getElementById('welcome-screen');
  testContent = document.getElementById('test-content');
  btnStartTest = document.getElementById('btn-start-test');
  btnInfo = document.getElementById('btn-info');
  const btnCopyInfoLink = document.getElementById('btn-copy-info-link');
  questionContainer = document.getElementById('question-container');
  currentQuestionEl = document.getElementById('current-question');
  answerSlider = document.getElementById('answer-slider');
  btnNext = document.getElementById('btn-next');
  btnPrev = document.getElementById('btn-prev');
  selectionText = document.getElementById('selection-text');
  progressFill = document.getElementById('progress-fill');
  progressText = document.getElementById('progress-text');
  resultDiv = document.getElementById('result');
  infoModal = document.getElementById('info-modal');
  btnCloseInfo = document.getElementById('btn-close-info');
  infoModalBody = document.getElementById('info-modal-body');

  // Verificar que todos los elementos existen
  if (!welcomeScreen || !testContent || !btnStartTest) {
    console.error('Error: No se pudieron encontrar elementos esenciales del DOM');
    return;
}

// Event listeners
  btnStartTest.addEventListener('click', iniciarTest);
btnNext.addEventListener('click', responderPregunta);
btnPrev.addEventListener('click', preguntaAnterior);
answerSlider.addEventListener('input', actualizarSeleccion);

  // Info modal listeners
  if (btnInfo && infoModal && infoModalBody) {
    btnInfo.addEventListener('click', () => {
      mostrarInfoPersonalidades();
      infoModal.style.display = 'flex';
    });
  }
  // Compartir: copiar magic link a descripciones
  if (btnCopyInfoLink) {
    btnCopyInfoLink.addEventListener('click', async () => {
      const url = new URL(window.location.href);
      url.searchParams.set('view', 'descriptions');
      try {
        await navigator.clipboard.writeText(url.toString());
        btnCopyInfoLink.textContent = '✅ Enlace copiado';
        setTimeout(() => (btnCopyInfoLink.textContent = '🔗 Copiar enlace a descripciones'), 2000);
      } catch (e) {
        alert(url.toString());
      }
    });
  }
  if (btnCloseInfo && infoModal) {
    btnCloseInfo.addEventListener('click', () => {
      infoModal.style.display = 'none';
      infoModalBody.innerHTML = '';
    });
  }
  // Cerrar modal al hacer click fuera del content
  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) {
        infoModal.style.display = 'none';
        if (infoModalBody) infoModalBody.innerHTML = '';
      }
    });
  }

// Agregar event listeners a los números
document.querySelectorAll('.value-label').forEach((label, index) => {
  label.addEventListener('click', () => clickearValor(index + 1));
});

// Permitir avanzar con Enter
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (welcomeScreen.style.display !== 'none') {
        iniciarTest();
      } else if (testContent.style.display !== 'none' && questionContainer.style.display !== 'none') {
    responderPregunta();
      }
    }
  });

  debugLog('Aplicación inicializada correctamente');
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializarApp);

// Render de información de personalidades (reutiliza generarDetalleTemperamento)
function mostrarInfoPersonalidades() {
  if (!infoModalBody) return;
  // Construir fichas para cada temperamento en orden definido
  const cards = temperamentos.map((t, idx) => {
    const tempOrdenadoFake = {
      animal: t.animal,
      puntaje: 0,
      posicion: idx
    };
    // Uso directo de descripciones para contenido
    const detalle = descripciones[t.animal];
    return `
      <div class="detalle-card">
        <div class="detalle-header">
          <h3>${detalle.emoji} ${detalle.titulo} (${equivalenciasClasicas[t.animal]})</h3>
        </div>
        <div class="descripcion-general"><p>${detalle.descripcion}</p></div>
        <div class="caracteristicas-grid">
          <div class="columna">
            <h4>✅ Características</h4>
            <ul>${detalle.caracteristicas.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="fortalezas-debilidades">
          <div class="columna fortalezas">
            <h4>💪 Fortalezas</h4>
            <ul>${detalle.fortalezas.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div class="columna debilidades">
            <h4>⚠️ Debilidades</h4>
            <ul>${detalle.debilidades.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="desarrollo">
          <h4>🎯 Debe aprender/desarrollar</h4>
          <ul>${detalle.desarrollo.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  }).join('');
  infoModalBody.innerHTML = cards;
}

// Enrutado por query params (magic links)
function procesarMagicLinks() {
  const params = new URLSearchParams(window.location.search);
  const vista = params.get('view');
  if (vista === 'descriptions') {
    // Abrir el modal de descripciones en la bienvenida
    if (welcomeScreen && infoModal) {
      welcomeScreen.style.display = 'block';
      mostrarInfoPersonalidades();
      infoModal.style.display = 'flex';
    }
  }
  // Puntuaciones compartibles: view=scores&scores=leon:30,mono:12,labrador:5,castor:3
  if (vista === 'scores') {
    const raw = params.get('scores');
    if (raw) {
      const map = Object.fromEntries(raw.split(',').map(p => p.split(':')));
      // Construir estructura temporaria de puntajes
      const orden = ['León','Mono','Labrador','Castor'];
      temperamentosOrdenados = orden.map((animal, idx) => ({
        ...temperamentos[idx],
        animal,
        puntaje: Number(map[animal.toLowerCase()] || 0),
        posicion: idx
      })).sort((a,b)=>b.puntaje-a.puntaje);
      // Limpiar UI y mostrar resultado sintético
      if (welcomeScreen) welcomeScreen.style.display = 'none';
      if (testContent) testContent.style.display = 'none';
      if (resultDiv) resultDiv.style.display = 'block';
      preguntasAleatorias = []; // para evitar cálculos de absolutos
      mostrarResultadoPrincipal();
      configurarEventListenersResultados();
    }
  }
}

document.addEventListener('DOMContentLoaded', procesarMagicLinks);