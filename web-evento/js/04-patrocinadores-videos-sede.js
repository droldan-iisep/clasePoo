// ALUMNO 4 - Abrir videos de YouTube en un modal
(() => {
  const modal = document.getElementById('a4-modal');
  const contenido = document.getElementById('a4-modal-contenido');
  if (!modal) return;

  document.querySelectorAll('.a4-video').forEach(v => {
    v.addEventListener('click', () => {
      const id = v.dataset.youtube;
      contenido.innerHTML = id
        ? `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
        : '<p style="color:#fff;padding:2rem">Agrega el ID del video en data-youtube</p>';
      modal.classList.add('abierto');
    });
  });

  const cerrar = () => { modal.classList.remove('abierto'); contenido.innerHTML = ''; };
  modal.querySelector('.a4-cerrar').addEventListener('click', cerrar);
  modal.addEventListener('click', e => { if (e.target === modal) cerrar(); });
})();
