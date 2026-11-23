// ALUMNO 1 - Menú móvil + cuenta regresiva
(() => {
  'use strict';

  // ---------- MENÚ MÓVIL ----------
  const btn = document.querySelector('.a1-menu-btn');
  const links = document.querySelector('.a1-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('abierto');
      const abierto = links.classList.contains('abierto');
      btn.textContent = abierto ? '✕' : '☰';
      btn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
  }

  // ---------- CUENTA REGRESIVA ----------
  const contador = document.querySelector('.a1-contador');
  if (!contador) {
    console.warn('[a1] No se encontró .a1-contador en el DOM');
    return;
  }

  const fechaISO = contador.dataset.fecha;
  if (!fechaISO) {
    console.warn('[a1] Falta el atributo data-fecha');
    return;
  }

  const objetivo = new Date(fechaISO).getTime();
  if (isNaN(objetivo)) {
    console.error('[a1] data-fecha inválida:', fechaISO);
    return;
  }

  const elDias  = document.getElementById('a1-dias');
  const elHoras = document.getElementById('a1-horas');
  const elMin   = document.getElementById('a1-min');
  const elSeg   = document.getElementById('a1-seg');

  if (!elDias || !elHoras || !elMin || !elSeg) {
    console.error('[a1] Faltan los spans #a1-dias / #a1-horas / #a1-min / #a1-seg');
    return;
  }

  const dos = n => String(n).padStart(2, '0');

  function actualizar() {
    const diff = objetivo - Date.now();

    if (diff <= 0) {
      elDias.textContent  = '00';
      elHoras.textContent = '00';
      elMin.textContent   = '00';
      elSeg.textContent   = '00';
      return;
    }

    elDias.textContent  = dos(Math.floor(diff / 86400000));
    elHoras.textContent = dos(Math.floor(diff / 3600000) % 24);
    elMin.textContent   = dos(Math.floor(diff / 60000) % 60);
    elSeg.textContent   = dos(Math.floor(diff / 1000) % 60);
  }

  actualizar();
  const intervalo = setInterval(actualizar, 1000);
  window.addEventListener('beforeunload', () => clearInterval(intervalo));

  console.log('[a1] Cuenta regresiva activa hasta:', new Date(objetivo).toString());
})();