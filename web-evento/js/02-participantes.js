// ALUMNO 2 - Seleccionar participante y mostrarlo en la ficha destacada
(() => {
  const items = document.querySelectorAll('.a2-item');
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      // Quitar activo a todos y poner al clickeado
      items.forEach(i => i.classList.remove('activo'));
      item.classList.add('activo');
      
      // Actualizar textos
      document.getElementById('a2-nombre').textContent = item.dataset.nombre.toUpperCase();
      document.getElementById('a2-pais').textContent = item.dataset.pais.toUpperCase();
      document.getElementById('a2-rival').textContent = item.dataset.rival.toUpperCase();
      
      // ACTUALIZAR EL EXTRA (LA FRASE)
      document.getElementById('a2-frase').textContent = `"${item.dataset.frase}"`;
      
      // Actualizar foto
      const foto = document.getElementById('a2-foto');
      foto.textContent = ""; // Borra el texto de la foto (P1, P2, etc) para que se vea la imagen
      foto.style.backgroundImage = item.style.backgroundImage;
    });
  });
})();