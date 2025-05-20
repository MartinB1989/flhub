// Menú responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle del menú
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Cerrar menú cuando se hace clic fuera
    document.addEventListener('click', function(event) {
        const isClickInside = menuToggle.contains(event.target) || navLinks.contains(event.target);
        if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Cambiar el estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--background-color)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animación de aparición al hacer scroll
    const elementsToAnimate = document.querySelectorAll('.team-member, .project-card, .service-card');
    
    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Función que se ejecuta cuando los elementos entran en la pantalla
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Dejar de observar el elemento una vez que ha aparecido
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplicar estilos iniciales y comenzar a observar los elementos
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Animación para el botón flotante de WhatsApp
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        whatsappFloat.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    }
});

// Añadir animación para el botón de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    // Añadir estilos CSS para la animación de pulse
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            50% {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
        }
    `;
    document.head.appendChild(styleElement);
}); 