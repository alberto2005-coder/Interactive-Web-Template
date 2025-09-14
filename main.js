// Navigation functionality
function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    const target = document.getElementById(sectionName);
    if (target) target.classList.add('active');
}

// Create floating color particles
function createParticles() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#fd79a8', '#fdcb6e'];
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'color-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 10 + 5) + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Enhanced form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const button = this.querySelector('.cta-button');
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = '¡MENSAJE ENVIADO!';
        button.style.background = '#4caf50';
        createConfetti();

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#00bcd4';
            this.reset();
        }, 3000);
    });
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'floatUp 3s linear forwards';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Smooth scrolling nav effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.backdropFilter = 'blur(10px)';
    }
});

// Initialize particles
window.addEventListener('load', createParticles);

// Interactive color explosion
const colorFace = document.querySelector('.color-face');
if (colorFace) {
    colorFace.addEventListener('click', function() {
        createColorExplosion(this);
    });
}

function createColorExplosion(element) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#fd79a8'];
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + rect.width/2) + 'px';
        particle.style.top = (rect.top + rect.height/2) + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '1001';
        particle.style.pointerEvents = 'none';

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 100 + 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        particle.style.transition = 'all 1s ease-out';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transform = `translate(${vx}px, ${vy}px)`;
            particle.style.opacity = '0';
        }, 10);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Search box functionality (ignore case, accents, and tildes)
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('input', function(e) {
        const normalizeText = str => str.toLowerCase()
                                        .normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, '');
        const searchTerm = normalizeText(e.target.value);

        if (searchTerm.includes('seccion 1')) showSection('holi');
        else if (searchTerm.includes('seccion 2')) showSection('about');
        else if (searchTerm.includes('contacto')) showSection('contact');
    });
}
