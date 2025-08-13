// Lógica del test (reducida) que al finalizar navega a result.html con scores
(function(){
  const currentQuestionEl = document.getElementById('current-question');
  const answerSlider = document.getElementById('answer-slider');
  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');
  const selectionText = document.getElementById('selection-text');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  let preguntas = [];
  let idxActual = 0;
  let respuestas = [];

  function shuffleArray(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function crearPreguntas() {
    const all = [];
    temperamentos.forEach((grupo, grupoIdx) => {
      grupo.questions.forEach((q)=> all.push({ pregunta:q, grupoIdx, animal:grupo.animal }));
    });
    return shuffleArray(all);
  }

  function actualizarSeleccion() {
    const val = Number(answerSlider.value);
    const textos = ['', 'Casi Nunca', 'Rara Vez', 'Frecuentemente', 'Casi Siempre'];
    selectionText.textContent = textos[val];
    document.querySelectorAll('.value-label').forEach((el,i)=>{
      el.classList.toggle('active', i+1===val);
    });
  }

  function mostrarPregunta() {
    if (idxActual >= preguntas.length) {
      finalizar();
      return;
    }
    const p = preguntas[idxActual];
    currentQuestionEl.textContent = p.pregunta;
    const val = respuestas[idxActual] ?? 1;
    answerSlider.value = val;
    actualizarSeleccion();
    btnPrev.disabled = idxActual===0;
    const progreso = ((idxActual + 1) / preguntas.length) * 100;
    progressFill.style.width = `${progreso}%`;
    progressText.textContent = `${Math.round(progreso)}% completado`;
  }

  function siguiente() {
    const val = Number(answerSlider.value);
    respuestas[idxActual] = val;
    idxActual++;
    mostrarPregunta();
  }

  function anterior() {
    const val = Number(answerSlider.value);
    respuestas[idxActual] = val;
    if (idxActual>0) idxActual--;
    mostrarPregunta();
  }

  function finalizar() {
    const puntajes = [0,0,0,0];
    preguntas.forEach((p,i)=>{
      const v = (respuestas[i] ?? 1) - 1; // 0-3
      puntajes[p.grupoIdx] += v;
    });
    const orden = ['León','Mono','Labrador','Castor'];
    const map = Object.fromEntries(orden.map((animal, idx)=>{
      return [animal.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(), puntajes[idx]];
    }));
    const query = `scores=leon-${map['leon']}.mono-${map['mono']}.labrador-${map['labrador']}.castor-${map['castor']}`;
    window.location.href = `/test-personalidades/result.html?${query}`;
  }

  btnNext.addEventListener('click', siguiente);
  btnPrev.addEventListener('click', anterior);
  answerSlider.addEventListener('input', actualizarSeleccion);
  document.querySelectorAll('.value-label').forEach((el,i)=>{
    el.addEventListener('click', ()=>{ answerSlider.value = String(i+1); actualizarSeleccion(); });
  });
  document.addEventListener('keypress', (e)=>{ if(e.key==='Enter') siguiente(); });

  preguntas = crearPreguntas();
  mostrarPregunta();
})();


