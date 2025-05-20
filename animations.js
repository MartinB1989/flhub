// F&L hub - Sistema de animaciones para tarjetas

document.addEventListener('DOMContentLoaded', function() {
    // Aplicar clase para animación de entrada a todas las tarjetas
    const allCards = document.querySelectorAll('.project-card, .service-card, .team-member');
    allCards.forEach(card => {
        card.classList.add('fade-in-card');
    });
    
    // Función para verificar si un elemento está visible en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // El elemento debe estar más centrado en la pantalla para activar la animación
        // Solo consideramos "visible" cuando está al menos un 30% dentro de la ventana
        return (
            // La parte superior del elemento está dentro del 70% inferior de la pantalla
            rect.top >= 0 && 
            rect.top <= windowHeight * 0.7 && 
            // Y la parte inferior está visible
            rect.bottom >= 0
        );
    }

    // Función para animar elementos visibles al hacer scroll
    function animateOnScroll() {
        const cards = document.querySelectorAll('.fade-in-card');
        cards.forEach(card => {
            if (isElementInViewport(card) && !card.classList.contains('visible')) {
                // Añadir un pequeño retraso aleatorio para que no aparezcan todas a la vez
                setTimeout(() => {
                    card.classList.add('visible');
                }, Math.random() * 300); // Aumentamos el retraso para que sea más evidente
            }
        });
    }

    // No ejecutamos inmediatamente al cargar para permitir que el usuario vea las animaciones
    // Solo ejecutamos después de un pequeño retraso
    setTimeout(animateOnScroll, 500);

    // Ejecutar animación al hacer scroll con un throttle para mejor rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(animateOnScroll);
    });
}); 