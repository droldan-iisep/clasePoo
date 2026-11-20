// NO TOCAR - Carga cada sección HTML y luego el JS de cada alumno.
// Requiere abrir el proyecto con un servidor (Live Server en VS Code o GitHub Pages).

const scriptsAlumnos = [
  'js/01-header-hero.js',
  'js/02-participantes.js',
  'js/03-pronosticos-combates.js',
  'js/04-patrocinadores-videos-sede.js',
  'js/05-horarios-faq-footer.js'
];

async function cargarSecciones() {
  const bloques = document.querySelectorAll('[data-include]');
  for (const bloque of bloques) {
    const ruta = bloque.getAttribute('data-include');
    try {
      const resp = await fetch(ruta);
      if (!resp.ok) throw new Error(resp.status);
      bloque.outerHTML = await resp.text();
    } catch (e) {
      bloque.innerHTML = `<p style="padding:2rem;color:#ff8080">No se pudo cargar <b>${ruta}</b>. Abre el proyecto con Live Server.</p>`;
    }
  }
  for (const src of scriptsAlumnos) {
    const s = document.createElement('script');
    s.src = src;
    document.body.appendChild(s);
  }
}

cargarSecciones();
