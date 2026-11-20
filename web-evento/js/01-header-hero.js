// ALUMNO 1 - Menú móvil + cuenta regresiva
(() => {
  const btn = document.querySelector('.a1-menu-btn');
  const links = document.querySelector('.a1-links');
  if (btn) btn.addEventListener('click', () => links.classList.toggle('abierto'));

  const contador = document.querySelector('.a1-contador');
  if (!contador) return;
  const objetivo = new Date(contador.dataset.fecha).getTime();
  const dos = n => String(n).padStart(2, '0');

  function actualizar() {
    const diff = Math.max(0, objetivo - Date.now());
    document.getElementById('a1-dias').textContent = dos(Math.floor(diff / 86400000));
    document.getElementById('a1-horas').textContent = dos(Math.floor(diff / 3600000) % 24);
    document.getElementById('a1-min').textContent = dos(Math.floor(diff / 60000) % 60);
    document.getElementById('a1-seg').textContent = dos(Math.floor(diff / 1000) % 60);
  }
  actualizar();
  setInterval(actualizar, 1000);
})();
