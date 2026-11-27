// ALUMNO 4 - JavaScript optimizado (Lógica esencial)
(() => {
  // 1. Lógica para abrir y cerrar el Modal de Videos
  const modal = document.getElementById('a4-modal');
  const contenido = document.getElementById('a4-modal-contenido');
  
  if (modal && contenido) {
    document.querySelectorAll('.a4-video').forEach(video => {
      video.addEventListener('click', () => {
        const idYoutube = video.dataset.youtube;
        
        if (idYoutube && idYoutube.trim() !== "") {
          contenido.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${idYoutube}?autoplay=1&rel=0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
            </iframe>`;
        } else {
          contenido.innerHTML = `<p style="color:#fff; padding:2rem; text-align:center;">Video próximamente...</p>`;
        }
        modal.classList.add('abierto');
      });
    });

    const cerrarModal = () => { 
      modal.classList.remove('abierto'); 
      setTimeout(() => { contenido.innerHTML = ''; }, 400); 
    };

    modal.querySelector('.a4-cerrar').addEventListener('click', cerrarModal);
    modal.addEventListener('click', e => { if (e.target === modal) cerrarModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('abierto')) cerrarModal();
    });
  }

  // 2. Lógica del Botón Flotante (Mensaje)
  const btnReserva = document.getElementById("btn-reserva");
  if (btnReserva) {
    btnReserva.addEventListener("click", () => {
      alert("¡Gracias por tu interés! 🍽️\n\nPara reservar una mesa, por favor llámanos al:\n📞 +51 999 888 777");
    });
  }
})();