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
    let currentDetailAnimal = det || ganador.animal;
    resultDiv.innerHTML = `
      <div class="resultado-container">
        <h2>¡Test Completado!</h2>
        <h3>Tu temperamento dominante es: ${descripciones[ganador.animal].emoji} ${ganador.animal} (${equivalenciasClasicas[ganador.animal]})</h3>
        <div class="resultado-acciones" style="margin-top:10px;">
          <button id="btn-copy-link" class="share-btn">🔗 Copiar enlace</button>
          <button id="btn-download-pdf" class="btn-pdf">📄 Descargar PDF</button>
        </div>
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
        <div class="resultado-acciones" style="margin-top: 16px;">
          <a href="/test-personalidades/" class="btn-reiniciar" style="text-decoration:none;display:inline-block;">← Volver al inicio</a>
        </div>
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
        currentDetailAnimal = temperamentosOrdenados[idx].animal;
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

    // PDF
    const btnPdf = document.getElementById('btn-download-pdf');
    btnPdf?.addEventListener('click', () => {
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const marginX = 18;
        const contentWidth = pageWidth - marginX * 2;
        let y = 20;
        const addTitle = (t)=>{ doc.setFont('helvetica','bold'); doc.setFontSize(18); doc.text(t, pageWidth/2, y, {align:'center'}); y+=12; };
        const addSub = (t)=>{ doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.text(t, marginX, y); y+=8; };
        const addTxt = (t, sz=10, lead=5)=>{ doc.setFont('helvetica','normal'); doc.setFontSize(sz); const lines = doc.splitTextToSize(t, contentWidth); doc.text(lines, marginX, y); y += lines.length*lead; };
        const ensure = (need=20)=>{ if (y+need>pageHeight-15) { doc.addPage(); y=20; } };

        addTitle('Test de Personalidades - Resultados');
        addTxt(new Date().toLocaleString('es-ES'), 9, 5); y+=4;
        addSub('Dominante');
        addTxt(`${ganador.animal} (${equivalenciasClasicas[ganador.animal]})`, 12, 6); y+=2;
        addTxt(descripciones[ganador.animal].descripcion, 10, 5); y+=6;
        addSub('Ranking de temperamentos');
        temperamentosOrdenados.forEach((t, i)=>{ ensure(10); addTxt(`${i===0?'1°':i===1?'2°':i===2?'3°':'4°'} ${t.animal} (${equivalenciasClasicas[t.animal]}) — ${t.puntaje} pts`, 10, 6); });
        ensure(20);
        doc.addPage(); y=20; addTitle('Descripciones completas'); y+=4;
        Object.keys(descripciones).forEach((animal)=>{
          const d = descripciones[animal];
          addSub(`${d.titulo} (${equivalenciasClasicas[animal]})`);
          addTxt(d.descripcion, 10, 5); y+=2;
          addSub('Características'); d.caracteristicas.forEach(i=>{ ensure(8); addTxt(`• ${i}`, 9, 5); }); y+=2;
          addSub('Fortalezas'); d.fortalezas.forEach(i=>{ ensure(8); addTxt(`• ${i}`, 9, 5); }); y+=2;
          addSub('Debilidades'); d.debilidades.forEach(i=>{ ensure(8); addTxt(`• ${i}`, 9, 5); }); y+=2;
          addSub('Debe aprender/desarrollar'); d.desarrollo.forEach(i=>{ ensure(8); addTxt(`• ${i}`, 9, 5); }); y+=6;
          ensure(30);
        });
        const nombreArchivo = `test-personalidades-${ganador.animal.toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(nombreArchivo);
      } catch (e) {
        alert('No se pudo generar el PDF.');
      }
    });

    // Copiar enlace
    const btnCopy = document.getElementById('btn-copy-link');
    btnCopy?.addEventListener('click', async () => {
      const url = new URL(window.location.origin + '/test-personalidades/result.html');
      const orden = ['León','Mono','Labrador','Castor'];
      const scores = orden.map((animal) => {
        const t = temperamentosOrdenados.find(x => x.animal === animal);
        const key = animal.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
        const val = t ? t.puntaje : 0;
        return `${key}-${val}`;
      }).join('.');
      url.searchParams.set('scores', scores);
      if (currentDetailAnimal) {
        url.searchParams.set('detail', currentDetailAnimal.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase());
      }
      try {
        await navigator.clipboard.writeText(url.toString());
        btnCopy.textContent = '✅ Enlace copiado';
        setTimeout(()=> btnCopy.textContent = '🔗 Copiar enlace', 1500);
      } catch (e) {
        prompt('Copia este enlace:', url.toString());
      }
    });
  }

  render();
  });
})();


