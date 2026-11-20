// ALUMNO 3 - Barras de porcentaje animadas + botón votar
(() => {
  // Seleccionamos TODAS las tarjetas y TODOS los botones de votar
  const tarjetas = document.querySelectorAll('.a3-pron');
  const botonesVotar = document.querySelectorAll('.a3-votar');
  let yaVoto = false; // Bandera para controlar que solo vote 1 vez

  tarjetas.forEach(card => {
    // Animación inicial de carga
    let a = Number(card.dataset.a);
    let b = Number(card.dataset.b);
    
    const barraA = card.querySelector('.a3-barra-a');
    const barraB = card.querySelector('.a3-barra-b');
    const textoA = card.querySelector('.a3-pa');
    const textoB = card.querySelector('.a3-pb');
    const btn = card.querySelector('.a3-votar');

    // Animación de entrada
    setTimeout(() => {
      barraA.style.width = a + '%';
      barraB.style.width = b + '%';
    }, 300);

    // Lógica del botón VOTAR (Extra)
    btn.addEventListener('click', () => {
      // Si ya votó en otra tarjeta, no lo dejamos votar de nuevo
      if (yaVoto) return;
      
      // Marcamos que ya votó
      yaVoto = true;

      // Sumamos 1% al lado A para simular el voto
      a += 1;
      if (a > 100) { a = 100; } else { b -= 1; }

      // Actualizamos la interfaz de ESTA tarjeta
      barraA.style.width = a + '%';
      barraB.style.width = b + '%';
      textoA.textContent = a + '%';
      textoB.textContent = b + '%';

      // Feedback al usuario en la tarjeta elegida
      btn.textContent = '¡VOTO REGISTRADO!';
      btn.disabled = true;

      // Bloqueamos el resto de botones para que no vote en otra tarjeta
      botonesVotar.forEach(otroBtn => {
        if (otroBtn !== btn) {
          otroBtn.disabled = true;
          otroBtn.textContent = 'VOTACIÓN CERRADA';
          otroBtn.style.opacity = '0.3';
          otroBtn.style.cursor = 'not-allowed';
        }
      });
    });
  });
})();