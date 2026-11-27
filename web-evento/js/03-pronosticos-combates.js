// Función para votar (se llama desde el HTML)
window.votarPlato = function(boton) {
  // Si el botón ya está desactivado, no hacer nada
  if (boton.disabled) return;

  // 1. Lógica para sumar 1% al plato seleccionado
  const tarjeta = boton.closest('.a3-plato-card');
  const porcA = tarjeta.querySelector('.a3-porc-a');
  const barraA = tarjeta.querySelector('.a3-barra-a');

  // Extraemos el número actual (ej. "85%" -> 85)
  let valorActual = parseInt(porcA.textContent);
  
  // Sumamos 1% (sin pasar de 100)
  if (valorActual < 100) {
    valorActual++;
    porcA.textContent = valorActual + "%";
    barraA.style.width = valorActual + "%";
  }

  // 2. Cambiamos el texto del botón
  boton.textContent = "¡GRACIAS POR TU VOTO!";

  // 3. Bloqueamos TODOS los botones de votar de la página
  const todosLosBotones = document.querySelectorAll('.a3-btn-votar');
  todosLosBotones.forEach(function(b) {
    b.disabled = true;
    b.style.opacity = '0.5';
    b.style.cursor = 'not-allowed';
  });
};