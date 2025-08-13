(function(){
  const list = document.getElementById('info-list');
  const btnCopy = document.getElementById('btn-copy-info-link');
  const params = new URLSearchParams(window.location.search);
  const det = params.get('detail');
  const normalizeKey = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function render() {
    const items = Object.keys(descripciones).map((animal)=>{
      const d = descripciones[animal];
      return `
        <div class="detalle-card" id="card-${normalizeKey(animal)}">
          <div class="detalle-header"><h3>${d.emoji} ${d.titulo} (${equivalenciasClasicas[animal]})</h3></div>
          <div class="descripcion-general"><p>${d.descripcion}</p></div>
          <div class="caracteristicas-grid"><div class="columna"><h4>✅ Características</h4><ul>${d.caracteristicas.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>
          <div class="fortalezas-debilidades">
            <div class="columna fortalezas"><h4>💪 Fortalezas</h4><ul>${d.fortalezas.map(i=>`<li>${i}</li>`).join('')}</ul></div>
            <div class="columna debilidades"><h4>⚠️ Debilidades</h4><ul>${d.debilidades.map(i=>`<li>${i}</li>`).join('')}</ul></div>
          </div>
          <div class="desarrollo"><h4>🎯 Debe aprender/desarrollar</h4><ul>${d.desarrollo.map(i=>`<li>${i}</li>`).join('')}</ul></div>
        </div>
      `;
    }).join('');
    list.innerHTML = items;
    if (det) {
      const el = document.getElementById(`card-${normalizeKey(det)}`);
      el && el.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  }

  render();

  btnCopy?.addEventListener('click', async ()=>{
    const url = new URL(window.location.href);
    url.searchParams.set('view','descriptions');
    try { await navigator.clipboard.writeText(url.toString()); btnCopy.textContent='✅ Enlace copiado'; setTimeout(()=>btnCopy.textContent='🔗 Copiar enlace a descripciones',1500);} catch { alert(url.toString()); }
  });
})();


