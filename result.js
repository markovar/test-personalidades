// Render de resultados a partir de query params
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    try { window.__resultInit = true; } catch(e) {}
  const resultDiv = document.getElementById('result');
  const normalizeKey = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('scores');
  const det = params.get('detail');
  if (!raw) {
    resultDiv.innerHTML = '<p style="color:#c00">No hay resultados para mostrar.</p>';
    return;
  }
  const pairSep = raw.includes('.') ? '.' : ',';
  const kvSep = raw.includes('-') ? '-' : ':';
  const map = Object.fromEntries(raw.split(pairSep).map(p => {
    const parts = p.split(kvSep);
    const k = parts[0];
    const v = parts.slice(1).join(kvSep); // por si falta separador
    return [normalizeKey(k), Number(v || 0)];
  }));
  const orden = ['León','Mono','Labrador','Castor'];
  const temperamentosOrdenados = orden.map((animal, idx) => ({
    ...temperamentos[idx],
    animal,
    puntaje: Number(map[normalizeKey(animal)] || 0),
    posicion: idx
  })).sort((a,b)=>b.puntaje-a.puntaje);

  function generarDetalleTemperamento(temp) {
    const detalle = descripciones[temp.animal];
    return `
      <div class="detalle-card">
        <div class="detalle-header">
          <h3>${detalle.emoji} ${detalle.titulo} (${equivalenciasClasicas[temp.animal]})</h3>
          <div class="puntaje-grande">${temp.puntaje} puntos</div>
        </div>
        <div class="descripcion-general"><p>${detalle.descripcion}</p></div>
        <div class="caracteristicas-grid"><div class="columna"><h4>✅ Características</h4><ul>${detalle.caracteristicas.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>
        <div class="fortalezas-debilidades">
          <div class="columna fortalezas"><h4>💪 Fortalezas</h4><ul>${detalle.fortalezas.map(i=>`<li>${i}</li>`).join('')}</ul></div>
          <div class="columna debilidades"><h4>⚠️ Debilidades</h4><ul>${detalle.debilidades.map(i=>`<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="desarrollo"><h4>🎯 Debe aprender/desarrollar</h4><ul>${detalle.desarrollo.map(i=>`<li>${i}</li>`).join('')}</ul></div>
      </div>
    `;
  }

  function render() {
    const ganador = temperamentosOrdenados[0];
    resultDiv.innerHTML = `
      <div class="resultado-container">
        <h2>¡Test Completado!</h2>
        <h3>Tu temperamento dominante es: ${descripciones[ganador.animal].emoji} ${ganador.animal} (${equivalenciasClasicas[ganador.animal]})</h3>
        <div class="grafico-container" style="margin: 20px 0;">
          <canvas id="chart-resultados" height="220"></canvas>
        </div>
        <div class="puntajes-resumen">
          ${temperamentosOrdenados.map((t, idx)=>`
            <div class="puntaje-item ${idx===0?'principal':''}" data-temperamento="${idx}">
              <span class="emoji">${descripciones[t.animal].emoji}</span>
              <span class="nombre">${t.animal} (${equivalenciasClasicas[t.animal]})</span>
              <span class="puntos">${t.puntaje} pts</span>
              <span class="posicion">${idx === 0 ? '1°' : idx === 1 ? '2°' : idx === 2 ? '3°' : '4°'}</span>
            </div>
          `).join('')}
        </div>
        <div id="detalle-temperamento">${generarDetalleTemperamento(temperamentosOrdenados[0])}</div>
      </div>
    `;

    // Chart (normalizado a top=100)
    const ctx = document.getElementById('chart-resultados');
    const maxP = Math.max(...temperamentosOrdenados.map(t=>t.puntaje), 0);
    const datos = temperamentosOrdenados.map(t=> maxP>0 ? Math.round((t.puntaje/maxP)*100) : 0);
    window.__chartResultados && window.__chartResultados.destroy();
    window.__chartResultados = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: temperamentosOrdenados.map(t=>`${descripciones[t.animal].emoji} ${t.animal}`),
        datasets: [{ label: 'Índice (100 = dominante)', data: datos, backgroundColor: ['#ff9800','#2196f3','#4caf50','#9c27b0'], borderRadius: 6 }]
      },
      options: { responsive:true, maintainAspectRatio:false, scales:{ y:{ beginAtZero:true, max:100, ticks:{ callback:v=>v+'%' } } }, plugins:{ legend:{display:false} } }
    });

    // Detalle click
    document.querySelectorAll('.puntaje-item').forEach((el)=>{
      el.addEventListener('click', (e)=>{
        const idx = Number(e.currentTarget.dataset.temperamento);
        document.getElementById('detalle-temperamento').innerHTML = generarDetalleTemperamento(temperamentosOrdenados[idx]);
        // Actualizar URL detail
        const url = new URL(window.location.href);
        url.searchParams.set('detail', temperamentosOrdenados[idx].animal.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase());
        window.history.pushState({}, '', url.toString());
      });
    });

    // Seleccionar detalle inicial si viene en URL
    if (det) {
      const idx = temperamentosOrdenados.findIndex(t => normalizeKey(t.animal) === normalizeKey(det));
      if (idx>=0) {
        document.getElementById('detalle-temperamento').innerHTML = generarDetalleTemperamento(temperamentosOrdenados[idx]);
      }
    }
  }

  render();
  });
})();


