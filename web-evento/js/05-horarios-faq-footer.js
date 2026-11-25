document.addEventListener("DOMContentLoaded", function() {
    
    // --- TAREA 1 y 2: Calcular horas locales y por país ---
    const actualizarHora = () => {
        const ahora = new Date();
        
        // 1. Tu hora local
        const localSpan = document.getElementById("a5-local");
        if (localSpan) {
            localSpan.textContent = ahora.toLocaleTimeString();
        }

        // 2. Horas por país (leyendo el data-utc del HTML)
        const tarjetasHora = document.querySelectorAll('.a5-hora');
        tarjetasHora.forEach(tarjeta => {
            const utcOffset = parseInt(tarjeta.getAttribute('data-utc'));
            
            const horaUTC = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
            const horaPais = new Date(horaUTC + (3600000 * utcOffset));
            
            const strong = tarjeta.querySelector('strong');
            if (strong) {
                strong.textContent = horaPais.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        });
    };

    setInterval(actualizarHora, 1000);
    actualizarHora();

    // --- TAREA 5 EXTRA: Solo una pregunta del FAQ abierta a la vez ---
    const detalles = document.querySelectorAll('.a5-faq details');
    detalles.forEach(detalle => {
        detalle.addEventListener('toggle', function() {
            if (this.open) {
                detalles.forEach(otroDetalle => {
                    if (otroDetalle !== this) {
                        otroDetalle.removeAttribute('open');
                    }
                });
            }
        });
    });

    // --- Extra: Actualizar el año del footer automáticamente ---
    const anioSpan = document.getElementById("a5-anio");
    if (anioSpan) {
        anioSpan.textContent = new Date().getFullYear();
    }
});