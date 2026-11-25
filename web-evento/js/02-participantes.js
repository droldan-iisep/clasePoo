// ALUMNO 2 - Controlador de Participantes (Delegación de Eventos)
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.a2-item');
  if (!btn) return;

  const todosLosBotones = document.querySelectorAll('.a2-item');
  todosLosBotones.forEach(function(b) { b.classList.remove('activo'); });
  btn.classList.add('activo');

  const nombre = btn.getAttribute('data-nombre');
  const pais = btn.getAttribute('data-pais');
  const rival = btn.getAttribute('data-rival');
  const frase = btn.getAttribute('data-frase');
  const fotoUrl = btn.style.backgroundImage;

  const elNombre = document.getElementById('a2-nombre');
  const elPais = document.getElementById('a2-pais');
  const elRival = document.getElementById('a2-rival');
  const elFrase = document.getElementById('a2-frase');
  const elBadge = document.getElementById('a2-badge-pais');
  const elFoto = document.getElementById('a2-foto');

  if (elNombre) elNombre.textContent = nombre.toUpperCase();
  if (elPais) elPais.textContent = pais.toUpperCase();
  if (elRival) elRival.textContent = rival.toUpperCase();
  if (elFrase) elFrase.textContent = '"' + frase + '"';
  if (elBadge) elBadge.textContent = pais.toUpperCase();
  if (elFoto && fotoUrl) elFoto.style.backgroundImage = fotoUrl;
});