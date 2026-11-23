// ALUMNO 4 - Abrir videos de YouTube en modal (Temática: Restaurante)
(() => {
  const modal = document.getElementById('a4-modal');
  const contenido = document.getElementById('a4-modal-contenido');
  
  if (!modal || !contenido) return;

  document.querySelectorAll('.a4-video').forEach(video => {
    video.addEventListener('click', () => {
      // Leemos el ID que pusiste en el HTML
      const idYoutube = video.dataset.youtube;
      
      // Verificamos que sea un ID válido y no el texto por defecto
      if (idYoutube && idYoutube.trim() !== "" && idYoutube !== "ID_DEL_VIDEO_1" && idYoutube !== "ID_DEL_VIDEO_2" && idYoutube !== "ID_DEL_VIDEO_3") {
        contenido.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${idYoutube}?autoplay=1&rel=0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen>
          </iframe>`;
      } else {
        // Mensaje si el video aún no tiene ID
        contenido.innerHTML = `
          <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:var(--dorado); font-family:var(--fuente-texto);">
            <span style="font-size: 4rem; margin-bottom: 10px;">🍽️</span>
            <p style="font-size: 1.2rem;">Video próximamente...</p>
            <p style="font-size: 0.8rem; color: var(--gris);">No olvides agregar el ID en data-youtube</p>
          </div>`;
      }
      
      modal.classList.add('abierto');
    });
  });

  // Función para cerrar el modal y detener el video
  const cerrarModal = () => { 
    modal.classList.remove('abierto'); 
    setTimeout(() => { contenido.innerHTML = ''; }, 400); 
  };

  modal.querySelector('.a4-cerrar').addEventListener('click', cerrarModal);
  modal.addEventListener('click', e => { if (e.target === modal) cerrarModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('abierto')) cerrarModal();
  });
})();