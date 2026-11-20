// ALUMNO 3 - Barras de porcentaje animadas + botón votar
(() => {
  document.querySelectorAll('.a3-pron').forEach(card => {
    const a = Number(card.dataset.a);
    const b = Number(card.dataset.b);
    setTimeout(() => {
      card.querySelector('.a3-barra-a').style.width = a + '%';
      card.querySelector('.a3-barra-b').style.width = b + '%';
    }, 300);

    card.querySelector('.a3-votar').addEventListener('click', e => {
      e.target.textContent = '¡GRACIAS POR VOTAR!';
      e.target.disabled = true;
    });
  });
})();
