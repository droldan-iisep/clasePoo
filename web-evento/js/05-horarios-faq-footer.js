// ALUMNO 5 - Calcula la hora de inicio en cada país + año del footer
(() => {
  // Hora de inicio del evento en UTC (12:00 Perú = 17:00 UTC)
  const inicioUTC = new Date('2026-07-25T17:00:00Z');
  const dos = n => String(n).padStart(2, '0');

  document.querySelectorAll('.a5-hora').forEach(card => {
    const offset = Number(card.dataset.utc);
    const h = (inicioUTC.getUTCHours() + offset + 24) % 24;
    card.querySelector('strong').textContent = `${dos(h)}:${dos(inicioUTC.getUTCMinutes())}`;
  });

  const local = document.getElementById('a5-local');
  if (local) local.textContent = `${dos(inicioUTC.getHours())}:${dos(inicioUTC.getMinutes())}`;

  const anio = document.getElementById('a5-anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
