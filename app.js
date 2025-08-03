// Estructura de datos del test
const temperamentos = [
  {
    name: "León",
    animal: "León",
    questions: [
        "¿Me gusta tomar el control cuando algo necesita hacerse?",
        "¿Me molesta cuando los demás tardan en decidir?",
        "¿Prefiero actuar rápido que esperar mucho?",
        "¿Me cuesta tener paciencia con personas lentas?",
        "¿Me gusta liderar en lugar de seguir a otros?",
        "¿Tiendo a hacer las cosas a mi manera sin pedir opinión?",
        "¿Me frustro si los demás no hacen las cosas como yo espero?",
        "¿Soy muy directo al hablar, aunque suene fuerte?",
        "¿Pongo metas altas para mí y para los demás?",
        "¿Me cuesta aceptar errores, incluso si no fueron graves?",
        "¿Me resulta difícil pedir perdón?",
        "¿Prefiero encargarme yo mismo si veo que otros no hacen bien las cosas?",
        "¿Tiendo a decir las cosas sin rodeos?",
        "¿Me cuesta mostrar debilidad o pedir ayuda?",
        "¿Siento que puedo resolver los problemas mejor que otros?",
        "¿Tiendo a presionar para que todo se haga rápido?",
        "¿Me irrita cuando los planes no salen como quiero?",
        "¿Pongo el resultado por encima de los sentimientos?",
        "¿Me desanimo cuando pierdo el control de una situación?",
        "¿Prefiero resolver las cosas sin depender de nadie?",
        "¿Me gusta tomar decisiones importantes?",
        "¿Actúo con firmeza aunque otros se sientan incómodos?",
        "¿Pienso que la mayoría de los problemas tienen solución rápida?",
        "¿Me cuesta soltar el control de un proyecto?",
        "¿Me enoja que otros no se esfuercen tanto como yo?",
        "¿Prefiero avanzar sin detenerme aunque otros quieran descansar?",
        "¿Soy competitivo por naturaleza?",
        "¿Me cuesta aceptar que otros tengan el mando?",
        "¿Tiendo a liderar incluso cuando no me lo piden?",
        "¿A veces me enojo cuando alguien me contradice?"
    ]
  },
  {
    name: "Mono",
    animal: "Mono",
    questions: [
        "¿Me gusta hacer reír a los demás?",
        "¿Disfruto estar en medio de la gente y hablar mucho?",
        "¿Me aburro fácilmente cuando algo se vuelve repetitivo?",
        "¿Me cuesta terminar lo que empiezo?",
        "¿Prefiero empezar cosas nuevas en lugar de seguir con lo mismo?",
        "¿Cuento historias exageradas para que suenen más divertidas?",
        "¿Hablo más de lo que escucho?",
        "¿Me distraigo con facilidad?",
        "¿A veces me olvido de lo que prometí?",
        "¿Me gusta hacer muchas cosas al mismo tiempo, aunque no termine todas?",
        "¿Pierdo la noción del tiempo y llego tarde seguido?",
        "¿Me cuesta mantener el orden en mi espacio personal?",
        "¿Me dejo llevar por lo que siento en el momento?",
        "¿Me resulta difícil seguir una rutina por varios días?",
        "¿Me gusta ser el centro de atención en reuniones o grupos?",
        "¿Cambio de ánimo con facilidad durante el día?",
        "¿Lloro o me río con mucha facilidad?",
        "¿Tiendo a hablar mucho sobre mí mismo?",
        "¿Evito temas serios porque me aburren o me incomodan?",
        "¿Me cuesta decir que no cuando me invitan a algo divertido?",
        "¿Me gusta improvisar más que seguir reglas estrictas?",
        "¿Pido disculpas solo cuando ya no puedo evitarlo?",
        "¿Uso el humor para no hablar de lo que me duele?",
        "¿Me cuesta estudiar o concentrarme mucho tiempo?",
        "¿Soy muy emocional, incluso por cosas pequeñas?",
        "¿A veces digo cosas sin pensar si pueden ofender?",
        "¿Me gusta conocer gente nueva aunque no mantenga mucho contacto después?",
        "¿Evito compromisos serios que me quiten libertad?",
        "¿Me justifico con excusas cuando no cumplo algo?",
        "¿Siento que si no me divierto, no vale la pena hacerlo?"
    ]
  },
  {
    name: "Labrador",
    animal: "Labrador",
    questions: [
        "¿Prefiero seguir a otros antes que tomar el liderazgo?",
        "¿Me cuesta tomar decisiones por mi cuenta?",
        "¿Evito discutir, aunque crea tener razón?",
        "¿Me adapto a lo que digan los demás para no causar problemas?",
        "¿Me preocupo fácilmente por lo que podría pasar?",
        "¿Prefiero que todo siga igual a tener que enfrentar cambios?",
        "¿Me cuesta decir “no” por miedo a incomodar?",
        "¿Soy una persona tranquila que no busca llamar la atención?",
        "¿Evito los retos aunque sé que podría con ellos?",
        "¿Me siento mal cuando alguien se enoja conmigo?",
        "¿Tiendo a poner las necesidades de otros antes que las mías?",
        "¿Prefiero la paz, aunque eso signifique callar lo que pienso?",
        "¿Pienso mucho antes de hacer algo por miedo a equivocarme?",
        "¿Prefiero trabajar en grupo a trabajar solo?",
        "¿Soy más observador que hablador en reuniones?",
        "¿Me cuesta empezar algo nuevo si ya estoy cómodo como estoy?",
        "¿Me afecta mucho cuando alguien me critica?",
        "¿Evito cambios en mi rutina si puedo mantener todo igual?",
        "¿Me siento culpable si tomo decisiones que afectan a otros?",
        "¿Busco evitar conflictos a toda costa?",
        "¿Prefiero que otros hablen por mí en público?",
        "¿Me cuesta expresar lo que realmente quiero o siento?",
        "¿Tiendo a dejar que otros decidan por mí?",
        "¿Me gusta estar en ambientes tranquilos y sin sorpresas?",
        "¿Me esfuerzo por ser amable aunque esté cansado o molesto?",
        "¿Pienso más en los demás que en lo que yo necesito?",
        "¿Siento que los cambios me desestabilizan emocionalmente?",
        "¿Evito compromisos nuevos por miedo a no poder cumplir?",
        "¿Me es difícil tomar decisiones rápidas?",
        "¿Prefiero mantener la calma en lugar de decir lo que pienso?"
    ]
  },
  {
    name: "Castor",
    animal: "Castor",
    questions: [
        "¿Reviso los detalles antes de tomar decisiones?",
        "¿Me molesta cuando las cosas no están bien hechas?",
        "¿Me frustro cuando otros no siguen las reglas?",
        "¿Soy muy exigente conmigo y con los demás?",
        "¿Me cuesta confiar en que otros hagan bien el trabajo?",
        "¿Prefiero hacer las cosas solo para asegurarme que queden bien?",
        "¿Planeo todo con anticipación?",
        "¿Me cuesta cambiar de planes a última hora?",
        "¿Me pongo nervioso si tengo que improvisar?",
        "¿Reviso varias veces lo que hago para evitar errores?",
        "¿Me siento mal cuando algo no sale perfecto?",
        "¿Soy muy duro conmigo cuando me equivoco?",
        "¿Prefiero hacer las cosas despacio pero bien hechas?",
        "¿Me cuesta expresar lo que siento?",
        "¿A veces parezco frío o seco con otros?",
        "¿Me molesta el desorden o el ruido?",
        "¿Me cuesta perdonar si alguien rompe una regla importante?",
        "¿Guardo mis emociones para mí?",
        "¿No me gusta estar en lugares caóticos o desorganizados?",
        "¿Prefiero que las cosas estén bien hechas a que estén rápido?",
        "¿Veo más los errores que los aciertos?",
        "¿Cumplo con lo que prometo, aunque me cueste?",
        "¿Me gusta trabajar en lugares tranquilos?",
        "¿Me cuesta hacer algo si no entiendo para qué sirve?",
        "¿Me enoja cuando los demás no hacen las cosas como se debe?",
        "¿Me cuesta decidir si no tengo toda la información?",
        "¿No confío mucho en personas que improvisan todo?",
        "¿Siento que debo hacer todo muy bien para que me respeten?",
        "¿Siempre estoy pensando cómo mejorar lo que ya está bien?",
        "¿Me fastidia cuando algo está casi bien, pero no perfecto?",
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

// Variables del juego
let preguntasAleatorias = [];
let preguntaActual = 0;
let puntajes = [0, 0, 0, 0]; // León, Mono, Labrador, Castor
let respuestasUsuario = []; // Guardar respuestas para poder navegar hacia atrás

// Elementos del DOM
const questionContainer = document.getElementById('question-container');
const currentQuestionEl = document.getElementById('current-question');
const answerSlider = document.getElementById('answer-slider');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const selectionText = document.getElementById('selection-text');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultDiv = document.getElementById('result');

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
  progressText.textContent = `Pregunta ${preguntaActual + 1} de ${preguntasAleatorias.length}`;
}

// Responder pregunta (ir hacia adelante)
function responderPregunta() {
  const valorRespuesta = parseInt(answerSlider.value);
  
  // Guardar respuesta actual
  respuestasUsuario[preguntaActual] = valorRespuesta;
  
  // Avanzar a la siguiente pregunta
  preguntaActual++;
  
  // Pequeña animación antes de mostrar la siguiente
  questionContainer.style.opacity = '0.5';
  setTimeout(() => {
    mostrarPregunta();
    questionContainer.style.opacity = '1';
  }, 200);
}

// Ir a pregunta anterior
function preguntaAnterior() {
  if (preguntaActual > 0) {
    // Guardar respuesta actual antes de retroceder
    respuestasUsuario[preguntaActual] = parseInt(answerSlider.value);
    
    // Retroceder una pregunta
    preguntaActual--;
    
    // Pequeña animación antes de mostrar la anterior
    questionContainer.style.opacity = '0.5';
    setTimeout(() => {
      mostrarPregunta();
      questionContainer.style.opacity = '1';
    }, 200);
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
  questionContainer.style.display = 'none';
  document.getElementById('progress-bar').style.display = 'none';
  
  // Calcular puntajes finales basado en todas las respuestas
  calcularPuntajes();
  
  // Crear array de temperamentos con puntajes y ordenar por puntaje
  temperamentosOrdenados = temperamentos.map((temp, idx) => ({
    ...temp,
    puntaje: puntajes[idx],
    posicion: idx
  })).sort((a, b) => b.puntaje - a.puntaje);
  
  // Mostrar resultado principal
  mostrarResultadoPrincipal();
  resultDiv.style.display = 'block';
}

function mostrarResultadoPrincipal() {
  const ganador = temperamentosOrdenados[0];
  
  resultDiv.innerHTML = `
    <div class="resultado-container">
      <h2>¡Test Completado!</h2>
      <h3>Tu temperamento dominante es: ${descripciones[ganador.animal].emoji} ${ganador.animal}</h3>
      
      <!-- Resumen de puntajes -->
      <div class="puntajes-resumen">
        ${temperamentosOrdenados.map((temp, idx) => {
          const preguntasPorTemperamento = preguntasAleatorias.length / 4; // 30 preguntas por temperamento
          const puntajeMaximo = preguntasPorTemperamento * 3; // Máximo posible (escala 0-3)
          const porcentaje = Math.round((temp.puntaje / puntajeMaximo) * 100);
          return `
            <div class="puntaje-item ${idx === 0 ? 'principal' : ''}" onclick="mostrarDetalle(${idx})">
              <span class="emoji">${descripciones[temp.animal].emoji}</span>
              <span class="nombre">${temp.animal}</span>
              <span class="puntos">${temp.puntaje} pts (${porcentaje}%)</span>
              <span class="posicion">${idx === 0 ? '1°' : idx === 1 ? '2°' : idx === 2 ? '3°' : '4°'}</span>
            </div>
          `;
        }).join('')}
      </div>
      
      <p style="margin: 20px 0; color: #666;">
        Haz clic en cualquier temperamento para ver su descripción detallada
      </p>
      
      <!-- Detalle del temperamento seleccionado -->
      <div id="detalle-temperamento">
        ${generarDetalleTemperamento(0)}
      </div>
      
      <button onclick="reiniciarTest()" class="btn-reiniciar">
        🔄 Hacer test nuevamente
      </button>
    </div>
  `;
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
        <h3>${detalle.emoji} ${detalle.titulo}</h3>
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
  preguntaActual = 0;
  puntajes = [0, 0, 0, 0];
  respuestasUsuario = [];
  preguntasAleatorias = crearPreguntasAleatorias();
  
  questionContainer.style.display = 'block';
  document.getElementById('progress-bar').style.display = 'block';
  resultDiv.style.display = 'none';
  
  mostrarPregunta();
  actualizarSeleccion();
}

// Función para actualizar la selección visual
function actualizarSeleccion() {
  const valor = parseInt(answerSlider.value);
  const textos = ['', 'Nunca', 'A veces', 'Frecuentemente', 'Siempre'];
  const colores = ['', '#ff5722', '#ff9800', '#4caf50', '#2196f3']; // Colores correspondientes a la barra
  
  selectionText.textContent = textos[valor];
  selectionText.style.color = colores[valor];
  
  // Actualizar círculos de valores
  document.querySelectorAll('.value-label').forEach((label, index) => {
    label.classList.toggle('active', index + 1 === valor);
  });
}

// Función para hacer clic en los números
function clickearValor(valor) {
  answerSlider.value = valor;
  actualizarSeleccion();
}

// Event listeners
btnNext.addEventListener('click', responderPregunta);
btnPrev.addEventListener('click', preguntaAnterior);
answerSlider.addEventListener('input', actualizarSeleccion);

// Agregar event listeners a los números
document.querySelectorAll('.value-label').forEach((label, index) => {
  label.addEventListener('click', () => clickearValor(index + 1));
});

// Permitir avanzar con Enter
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && questionContainer.style.display !== 'none') {
    responderPregunta();
  }
});

// Inicializar el test
preguntasAleatorias = crearPreguntasAleatorias();
mostrarPregunta();
actualizarSeleccion();