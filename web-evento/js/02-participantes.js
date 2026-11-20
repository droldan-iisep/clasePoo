// ALUMNO 2 - Seleccionar participante y mostrarlo en la ficha destacada
(() => {
  const items = document.querySelectorAll('.a2-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('activo'));
      item.classList.add('activo');
      document.getElementById('a2-nombre').textContent = item.dataset.nombre.toUpperCase();
      document.getElementById('a2-pais').textContent = item.dataset.pais.toUpperCase();
      document.getElementById('a2-rival').textContent = item.dataset.rival.toUpperCase();
      const foto = document.getElementById('a2-foto');
      foto.textContent = item.textContent;
      foto.style.backgroundImage = item.style.backgroundImage; // si el botón tiene foto
    });
  });
})();
