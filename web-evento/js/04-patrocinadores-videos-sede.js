// ALUMNO 4 - Abrir videos en modal (Temática: Restaurante Premium)
(() => {
  const modal = document.getElementById('a4-modal');
  const contenido = document.getElementById('a4-modal-contenido');
  
  // Si no estamos en la sección de videos, no ejecutamos nada
  if (!modal || !contenido) return;

  // 1. Abrir el video al hacer clic en la tarjeta
  document.querySelectorAll('.a4-video').forEach(video => {
    video.addEventListener('click', () => {
      const idYoutube = video.dataset.youtube;
      
      // Si tiene el ID, carga el iframe de YouTube
      if (idYoutube && idYoutube.trim() !== "") {
        contenido.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${idYoutube}?autoplay=1&rel=0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen>
          </iframe>`;
      } else {
        // Mensaje elegante si no hay video configurado
        contenido.innerHTML = `
          <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:var(--dorado); font-family:var(--fuente-texto);">
            <span style="font-size: 4rem; margin-bottom: 10px;">🍽️</span>
            <p style="font-size: 1.2rem;">Video próximamente...</p>
            <p style="font-size: 0.8rem; color: var(--gris);">No olvides agregar el ID en data-youtube</p>
          </div>`;
      }
      
      // Mostrar el modal
      modal.classList.add('abierto');
    });
  });

  // 2. Función para cerrar el modal y limpiar el video
  const cerrarModal = () => { 
    modal.classList.remove('abierto'); 
    // Esperamos a que termine la animación de CSS para borrar el iframe y que el audio se detenga
    setTimeout(() => { 
      contenido.innerHTML = ''; 
    }, 400); 
  };

  // 3. Cerrar con el botón de la "X"
  modal.querySelector('.a4-cerrar').addEventListener('click', cerrarModal);

  // 4. Cerrar si el usuario hace clic fuera de la caja del video (en el fondo oscuro)
  modal.addEventListener('click', e => { 
    if (e.target === modal) cerrarModal(); 
  });

  // 5. EXTRA: Cerrar si el usuario presiona la tecla "Escape" (Esc)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('abierto')) {
      cerrarModal();
    }
  });
})();