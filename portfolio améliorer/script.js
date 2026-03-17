// Thème
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Langue
document.getElementById('languageSelect').addEventListener('change', function() {
    alert('Language changed to: ' + this.value);
});

// Navigation mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll fluide avec transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const transition = document.createElement('div');
            transition.classList.add('section-transition');
            document.body.appendChild(transition);
            setTimeout(() => transition.classList.add('active'), 10);
            setTimeout(() => {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                setTimeout(() => {
                    transition.classList.remove('active');
                    setTimeout(() => transition.remove(), 600);
                }, 600);
            }, 300);
        }
    });
});

// Retour en haut
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('active', window.pageYOffset > 300);
});

// Barres de compétences
const skillBars = document.querySelectorAll('.skill-progress');
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => bar.style.width = width, 100);
    });
}

// Compteurs tableau de bord
const projectsCounter = document.getElementById('projectsCount');
const clientsCounter = document.getElementById('clientsCount');
const efficiencyCounter = document.getElementById('efficiencyCount');
const experienceCounter = document.getElementById('experienceCount');
function animateCounter(element, start, end, duration, suffix = '', withBounce = false) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (withBounce && progress < 1) {
            element.style.transform = `scale(${1 + 0.2 * Math.sin(progress * Math.PI * 5)})`;
        }
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.style.transform = 'scale(1)';
        }
    };
    window.requestAnimationFrame(step);
}
function animateCounters() {
    animateCounter(projectsCounter, 0, 15, 1000, '', true);
    animateCounter(clientsCounter, 0, 120, 1000, '', true);
    animateCounter(efficiencyCounter, 0, 95, 1000, '%', true);
    animateCounter(experienceCounter, 0, 3, 1000, '+', true);
    document.querySelectorAll('.dashboard-icon').forEach((icon, i) => {
        setTimeout(() => icon.style.animation = 'pulse 1s ease, float 4s ease-in-out infinite', i * 200);
    });
}

// Témoignages
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;
function showSlide(index) {
    testimonialSlides.forEach(s => s.classList.remove('active'));
    testimonialDots.forEach(d => d.classList.remove('active'));
    testimonialSlides[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentSlide = index;
}
testimonialDots.forEach(dot => {
    dot.addEventListener('click', function() {
        showSlide(parseInt(this.getAttribute('data-slide')));
    });
});
setInterval(() => showSlide((currentSlide + 1) % testimonialSlides.length), 5000);

// Validation formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    document.getElementById('nameError').style.display = name.value.trim() === '' ? 'block' : 'none';
    if (name.value.trim() === '') isValid = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('emailError').style.display = !emailRegex.test(email.value) ? 'block' : 'none';
    if (!emailRegex.test(email.value)) isValid = false;
    document.getElementById('subjectError').style.display = subject.value.trim() === '' ? 'block' : 'none';
    if (subject.value.trim() === '') isValid = false;
    document.getElementById('messageError').style.display = message.value.trim() === '' ? 'block' : 'none';
    if (message.value.trim() === '') isValid = false;
    if (isValid) {
        alert('Message envoyé avec succès!');
        this.reset();
    }
});

// Chat
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
chatButton.addEventListener('click', () => chatBox.classList.toggle('active'));
closeChat.addEventListener('click', () => chatBox.classList.remove('active'));
function sendChatMessage() {
    const text = chatInput.value.trim();
    if (text) {
        const userMsg = document.createElement('div');
        userMsg.className = 'message sent';
        userMsg.textContent = text;
        chatMessages.appendChild(userMsg);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'message received';
            botMsg.textContent = "Merci pour votre message !";
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}
sendMessage.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', e => e.key === 'Enter' && sendChatMessage());

// Observateur d'intersection pour les animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'dashboard') animateCounters();
            if (entry.target.id === 'about') animateSkillBars();
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(s => observer.observe(s));

// Animation spécifique pour la timeline et les projets
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.1 });
document.querySelectorAll('.timeline-item, .project-card').forEach(el => timelineObserver.observe(el));

// Curseur personnalisé
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});
document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .timeline-content').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Menu actif
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

// Initialisation animations si déjà visibles
if (window.innerHeight > document.getElementById('about').getBoundingClientRect().top) animateSkillBars();
if (window.innerHeight > document.getElementById('dashboard').getBoundingClientRect().top) animateCounters();

// Particules
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#3498db" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#3498db", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});