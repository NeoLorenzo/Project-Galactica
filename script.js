/**
 * Project Galactica - Essential Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project Galactica Initialized');

    // Create custom cursor or something? Let's go for a parallax effect.
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        // Move background subtly
        const container = document.getElementById('canvas-container');
        if (container) {
            container.style.transform = `scale(1.05) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        }
    });

    // Smooth scroll for nav links (handled by CSS, but good to have JS fallback)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                // Let CSS handle smooth scroll
                // Or: e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple fade-in observers
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.animate-fade-in').forEach(el => {
        observer.observe(el);
    });
});

// For glitch text, we could toggle the class.
const logo = document.querySelector('.glitch-text');
if (logo) {
    setInterval(() => {
        logo.classList.add('glitch-active');
        setTimeout(() => {
            logo.classList.remove('glitch-active');
        }, 150);
    }, 4000);
}
