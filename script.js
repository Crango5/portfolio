// ========== TRADUCTION ==========
const translations = {
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.projects": "Projets",
        "nav.dashboard": "Dashboard",
        "nav.testimonials": "Témoignages",
        "nav.contact": "Contact",
        "hero.title": "RAHARIJAONA Christian",
        "hero.subtitle": "Analyste Business Assurance & Expert Data",
        "hero.description": "Spécialisé dans l'analyse de données financières et la gestion des réclamations, je conçois des solutions automatisées pour optimiser les processus, sécuriser les transactions et améliorer la performance opérationnelle. Passionné par SQL, Excel, Power BI et le développement back-end, je transforme les données en décisions fiables et efficaces.",
        "hero.image.alt": "RAHARIJAONA Christian",
        "buttons.contact": "Me contacter",
        "buttons.more": "En savoir plus",
        "about.title": "À propos de moi",
        "about.subtitle": "Qui suis-je?",
        "about.p1": "Motivé et rigoureux, je m'adapte rapidement à de nouveaux outils et environnements. Mon expérience en Revenue Assurance et gestion des réclamations me permet d'analyser efficacement les données, identifier les anomalies et proposer des solutions back-end optimisées.",
        "about.p2": "Passionné par l'optimisation des processus, je maîtrise des outils comme SQL, Excel avancé, Power BI et le scripting Python pour automatiser les tâches et améliorer la performance opérationnelle. Je transforme les données en décisions fiables et actionnables.",
        "about.p3": "Toujours en quête de défis stimulants, je cherche à contribuer à des projets innovants, tout en développant constamment mes compétences techniques et analytiques.",
        "about.cv": "Télécharger mon CV",
        "skills.title": "Mes compétences",
        "skills.analysis": "Analyse de données",
        "skills.claims": "Gestion des réclamations",
        "skills.python": "Python",
        "skills.excel": "Excel",
        "skills.sql": "SQL",
        "skills.powerbi": "Power BI",
        "experience.title": "Mon expérience",
        "exp1.desc": "Je contribue à sécuriser et optimiser les flux de revenus de l’entreprise tout en renforçant les stratégies de prévention de la fraude.",
        "exp1.resp_title": "Principales responsabilités :",
        "exp1.resp1": "🔍 Surveiller et analyser les flux de revenus pour détecter les anomalies et les potentielles pertes.",
        "exp1.resp2": "🛡️ Mettre en place et maintenir les contrôles de prévention de la fraude.",
        "exp1.resp3": "📊 Collaborer avec les équipes Finance, IT et Opérations pour garantir l’intégrité des données et la fiabilité des processus.",
        "exp1.resp4": "💡 Proposer des améliorations continues dans les processus d’assurance revenus et de détection de fraude.",
        "exp1.skills_label": "Compétences acquises :",
        "exp1.skills": "Analyse de données financières, identification des anomalies, conception de solutions back-end pour résoudre les problèmes, automatisation des contrôles.",
        "exp2.desc": "Spécialiste en analyse de données, j’ai contribué à l’identification et à la correction des anomalies système pour garantir la fiabilité des informations et la satisfaction client.",
        "exp2.resp_title": "Principales responsabilités :",
        "exp2.resp1": "🔍 Analyser les flux de données et détecter les incohérences ou anomalies.",
        "exp2.resp2": "🛠️ Proposer et mettre en œuvre des solutions correctives back-end adaptées.",
        "exp2.resp3": "📊 Automatiser et optimiser les processus via Excel et SQL pour améliorer la qualité et la précision des données.",
        "exp2.resp4": "💡 Assurer la continuité et la fiabilité des informations pour guider les décisions opérationnelles.",
        "exp2.skills_label": "Compétences acquises :",
        "exp2.skills": "Analyse avancée de données, détection et résolution d’anomalies, automatisation des processus, adaptation rapide à de nouveaux outils et systèmes.",
        "exp3.desc": "Gestion des réclamations et requêtes clients pour différents services (WTB, BTW, Carte Visa, Mvola Avance, Retrait DAB, etc.), avec traitement et régularisation des anomalies de 2ème niveau et escalade au 3ème niveau si nécessaire.",
        "exp3.resp_title": "Principales missions :",
        "exp3.resp1": "🔍 Vérifier et analyser toutes les réclamations clients pour assurer leur résolution correcte.",
        "exp3.resp2": "🛠️ Régulariser les transactions ou escalader les cas complexes au 3ème niveau.",
        "exp3.resp3": "📌 Traiter les requêtes clients telles que ajustements manuels, justifications de transactions, réinitialisation de PIN, clôture de compte ou modification d’informations.",
        "exp3.skills_label": "Compétences acquises :",
        "exp3.skills": "Compréhension approfondie des besoins clients, mise en place de suivi pour éviter les doubles régularisations et garantir la fiabilité des opérations.",
        "exp4.desc": "Vérification des dossiers clients pour la certification du compte afin de connaître les utilisateurs.",
        "exp4.skills_label": "Compétences Acquis :",
        "exp4.skills": "Rapidité de vérification identité client, Connaissance dossier requis pour la certification",
        "exp5.desc": "Identification client et basculement SIM Free => Orange ou Expresso ou l'inverse.",
        "exp5.skills_label": "Compétence acquis :",
        "exp5.skills": "connaissance dans la partie Mobile",
        "exp6.desc": "Identification et saisie des informations utiles sur des sites.",
        "exp6.skills_label": "Compétence acquis :",
        "exp6.skills": "Rapidité en Dactylographie",
        "projects.title": "Mes projets",
        "project1.title": "Optimisation des réclamations Mvola",
        "project1.desc": "Mise en place d'un système de suivi des réclamations clients pour réduire les temps de traitement et éviter les doubles régularisations.",
        "project1.alt": "Projet Mvola",
        "project2.title": "Dashboard de suivi des requêtes",
        "project2.desc": "Création d'un tableau de bord Power BI pour visualiser les statistiques des requêtes clients et identifier les tendances.",
        "project2.alt": "Projet Dashboard",
        "project3.title": "Automatisation de la certification",
        "project3.desc": "Développement d'un script pour automatiser la vérification des dossiers clients pour la certification Mvola.",
        "project3.alt": "Projet Certification",
        "projects.see": "Voir",
        "projects.code": "Code",
        "dashboard.title": "Mes statistiques",
        "dashboard.projects": "Projets complétés",
        "dashboard.clients": "Clients satisfaits",
        "dashboard.efficiency": "Efficacité",
        "dashboard.years": "Années d'expérience",
        "testimonials.title": "Témoignages",
        "testimonial1.text": "Christian a fait un excellent travail dans la gestion de nos réclamations Mvola. Son analyse minutieuse et ses solutions back-end ont considérablement réduit nos temps de traitement.",
        "testimonial1.role": "Manager, Mvola",
        "testimonial2.text": "Le dashboard créé par Christian a transformé notre façon de suivre les requêtes clients. Nous pouvons maintenant identifier les tendances et améliorer nos processus.",
        "testimonial2.role": "Responsable clientèle",
        "testimonial3.text": "Son travail sur l'automatisation de la certification a permis à notre équipe de gagner un temps précieux tout en réduisant les erreurs humaines.",
        "testimonial3.role": "Chef de projet",
        "contact.title": "Contactez-moi",
        "contact.subtitle": "Discutons de votre projet",
        "contact.desc": "Je suis intéressé par des opportunités de freelance, des projets innovants ou des postes en analyse back-end. Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter.",
        "contact.location_label": "Localisation",
        "contact.location": "Antananarivo, Madagascar",
        "contact.phone_label": "Téléphone",
        "form.name": "Nom complet",
        "form.name.placeholder": "Votre nom",
        "form.name.error": "Veuillez entrer votre nom",
        "form.email": "Email",
        "form.email.placeholder": "votre@email.com",
        "form.email.error": "Veuillez entrer un email valide",
        "form.subject": "Sujet",
        "form.subject.placeholder": "Sujet de votre message",
        "form.subject.error": "Veuillez entrer un sujet",
        "form.message": "Message",
        "form.message.placeholder": "Votre message",
        "form.message.error": "Veuillez entrer votre message",
        "form.submit": "Envoyer le message",
        "blog.title": "Mon blog",
        "blog1.title": "Optimisation des processus Mvola",
        "blog1.excerpt": "Comment améliorer l'efficacité du traitement des réclamations clients dans les services financiers mobiles...",
        "blog1.alt": "Article blog",
        "blog2.title": "Introduction à Power BI",
        "blog2.excerpt": "Les bases pour créer des tableaux de bord efficaces pour le suivi des performances commerciales...",
        "blog2.alt": "Article blog",
        "blog3.title": "Automatisation avec Excel",
        "blog3.excerpt": "Comment utiliser les macros Excel pour automatiser les tâches répétitives et gagner du temps...",
        "blog3.alt": "Article blog",
        "blog.readmore": "Lire plus",
        "footer.desc": "Analyste Back-end & Gestionnaire de Réclamations passionné par la création de solutions efficaces et performantes.",
        "footer.quicklinks": "Liens rapides",
        "footer.services": "Services",
        "service1": "Analyse de données",
        "service2": "Gestion de réclamations",
        "service3": "Solutions Back-end",
        "service4": "Tableaux de bord Power BI",
        "service5": "Automatisation Excel",
        "footer.location": "Antananarivo, Madagascar",
        "footer.rights": "Tous droits réservés.",
        "chat.title": "Chat avec Christian",
        "chat.greeting": "Bonjour! Comment puis-je vous aider aujourd'hui?",
        "chat.placeholder": "Tapez votre message..."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.dashboard": "Dashboard",
        "nav.testimonials": "Testimonials",
        "nav.contact": "Contact",
        "hero.title": "RAHARIJAONA Christian",
        "hero.subtitle": "Business Assurance Analyst & Data Expert",
        "hero.description": "Specialized in financial data analysis and claims management, I design automated solutions to optimize processes, secure transactions, and improve operational performance. Passionate about SQL, Excel, Power BI, and back-end development, I transform data into reliable and effective decisions.",
        "hero.image.alt": "RAHARIJAONA Christian",
        "buttons.contact": "Contact me",
        "buttons.more": "Learn more",
        "about.title": "About me",
        "about.subtitle": "Who am I?",
        "about.p1": "Motivated and rigorous, I quickly adapt to new tools and environments. My experience in Revenue Assurance and claims management allows me to effectively analyze data, identify anomalies, and propose optimized back-end solutions.",
        "about.p2": "Passionate about process optimization, I master tools such as SQL, advanced Excel, Power BI, and Python scripting to automate tasks and improve operational performance. I transform data into reliable and actionable decisions.",
        "about.p3": "Always seeking stimulating challenges, I aim to contribute to innovative projects while constantly developing my technical and analytical skills.",
        "about.cv": "Download my CV",
        "skills.title": "My Skills",
        "skills.analysis": "Data Analysis",
        "skills.claims": "Claims Management",
        "skills.python": "Python",
        "skills.excel": "Excel",
        "skills.sql": "SQL",
        "skills.powerbi": "Power BI",
        "experience.title": "My Experience",
        "exp1.desc": "I help secure and optimize the company's revenue streams while strengthening fraud prevention strategies.",
        "exp1.resp_title": "Main responsibilities:",
        "exp1.resp1": "🔍 Monitor and analyze revenue streams to detect anomalies and potential losses.",
        "exp1.resp2": "🛡️ Implement and maintain fraud prevention controls.",
        "exp1.resp3": "📊 Collaborate with Finance, IT, and Operations teams to ensure data integrity and process reliability.",
        "exp1.resp4": "💡 Propose continuous improvements in revenue assurance and fraud detection processes.",
        "exp1.skills_label": "Acquired skills:",
        "exp1.skills": "Financial data analysis, anomaly identification, design of back-end solutions to resolve issues, control automation.",
        "exp2.desc": "As a data analysis specialist, I contributed to identifying and correcting system anomalies to ensure information reliability and customer satisfaction.",
        "exp2.resp_title": "Main responsibilities:",
        "exp2.resp1": "🔍 Analyze data flows and detect inconsistencies or anomalies.",
        "exp2.resp2": "🛠️ Propose and implement appropriate back-end corrective solutions.",
        "exp2.resp3": "📊 Automate and optimize processes using Excel and SQL to improve data quality and accuracy.",
        "exp2.resp4": "💡 Ensure continuity and reliability of information to guide operational decisions.",
        "exp2.skills_label": "Acquired skills:",
        "exp2.skills": "Advanced data analysis, anomaly detection and resolution, process automation, quick adaptation to new tools and systems.",
        "exp3.desc": "Management of customer claims and requests for various services (WTB, BTW, Visa Card, Mvola Advance, ATM withdrawals, etc.), with processing and regularization of 2nd-level anomalies and escalation to 3rd level if necessary.",
        "exp3.resp_title": "Main missions:",
        "exp3.resp1": "🔍 Verify and analyze all customer claims to ensure correct resolution.",
        "exp3.resp2": "🛠️ Regularize transactions or escalate complex cases to 3rd level.",
        "exp3.resp3": "📌 Handle customer requests such as manual adjustments, transaction justifications, PIN reset, account closure, or information changes.",
        "exp3.skills_label": "Acquired skills:",
        "exp3.skills": "Deep understanding of customer needs, implementation of monitoring to avoid duplicate corrections and ensure operational reliability.",
        "exp4.desc": "Verification of customer files for account certification to identify users.",
        "exp4.skills_label": "Acquired skills:",
        "exp4.skills": "Speed in customer identity verification, knowledge of required documents for certification.",
        "exp5.desc": "Customer identification and SIM switching Free => Orange or Expresso or vice versa.",
        "exp5.skills_label": "Acquired skills:",
        "exp5.skills": "Knowledge in the mobile sector.",
        "exp6.desc": "Identification and entry of useful information on websites.",
        "exp6.skills_label": "Acquired skills:",
        "exp6.skills": "Typing speed.",
        "projects.title": "My Projects",
        "project1.title": "Mvola Claims Optimization",
        "project1.desc": "Implementation of a customer claims tracking system to reduce processing time and avoid duplicate corrections.",
        "project1.alt": "Mvola project",
        "project2.title": "Request Tracking Dashboard",
        "project2.desc": "Creation of a Power BI dashboard to visualize customer request statistics and identify trends.",
        "project2.alt": "Dashboard project",
        "project3.title": "Certification Automation",
        "project3.desc": "Development of a script to automate the verification of customer files for Mvola certification.",
        "project3.alt": "Certification project",
        "projects.see": "View",
        "projects.code": "Code",
        "dashboard.title": "My Statistics",
        "dashboard.projects": "Completed projects",
        "dashboard.clients": "Satisfied clients",
        "dashboard.efficiency": "Efficiency",
        "dashboard.years": "Years of experience",
        "testimonials.title": "Testimonials",
        "testimonial1.text": "Christian did an excellent job managing our Mvola claims. His thorough analysis and back-end solutions significantly reduced our processing times.",
        "testimonial1.role": "Manager, Mvola",
        "testimonial2.text": "The dashboard created by Christian transformed the way we track customer requests. We can now identify trends and improve our processes.",
        "testimonial2.role": "Customer Relations Manager",
        "testimonial3.text": "His work on certification automation saved our team valuable time while reducing human errors.",
        "testimonial3.role": "Project Manager",
        "contact.title": "Contact me",
        "contact.subtitle": "Let's discuss your project",
        "contact.desc": "I am interested in freelance opportunities, innovative projects, or back-end analyst positions. However, if you have other requests or questions, feel free to contact me.",
        "contact.location_label": "Location",
        "contact.location": "Antananarivo, Madagascar",
        "contact.phone_label": "Phone",
        "form.name": "Full name",
        "form.name.placeholder": "Your name",
        "form.name.error": "Please enter your name",
        "form.email": "Email",
        "form.email.placeholder": "your@email.com",
        "form.email.error": "Please enter a valid email",
        "form.subject": "Subject",
        "form.subject.placeholder": "Message subject",
        "form.subject.error": "Please enter a subject",
        "form.message": "Message",
        "form.message.placeholder": "Your message",
        "form.message.error": "Please enter your message",
        "form.submit": "Send message",
        "blog.title": "My blog",
        "blog1.title": "Optimization of Mvola Processes",
        "blog1.excerpt": "How to improve the efficiency of customer claims processing in mobile financial services...",
        "blog1.alt": "Blog article",
        "blog2.title": "Introduction to Power BI",
        "blog2.excerpt": "The basics of creating effective dashboards for tracking business performance...",
        "blog2.alt": "Blog article",
        "blog3.title": "Automation with Excel",
        "blog3.excerpt": "How to use Excel macros to automate repetitive tasks and save time...",
        "blog3.alt": "Blog article",
        "blog.readmore": "Read more",
        "footer.desc": "Back-end Analyst & Claims Manager passionate about creating efficient and effective solutions.",
        "footer.quicklinks": "Quick links",
        "footer.services": "Services",
        "service1": "Data Analysis",
        "service2": "Claims Management",
        "service3": "Back-end Solutions",
        "service4": "Power BI Dashboards",
        "service5": "Excel Automation",
        "footer.location": "Antananarivo, Madagascar",
        "footer.rights": "All rights reserved.",
        "chat.title": "Chat with Christian",
        "chat.greeting": "Hello! How can I help you today?",
        "chat.placeholder": "Type your message..."
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    const alts = document.querySelectorAll('[data-i18n-alt]');
    alts.forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            el.alt = translations[lang][key];
        }
    });

    localStorage.setItem('preferred-language', lang);
}

// ========== THÈME ==========
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (themeToggle) themeToggle.checked = savedTheme === 'dark';
}
if (themeToggle) {
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ========== LANGUE ==========
const languageSelect = document.getElementById('languageSelect');
const savedLang = localStorage.getItem('preferred-language') || 'fr';
if (languageSelect) {
    languageSelect.value = savedLang;
    translatePage(savedLang);
    languageSelect.addEventListener('change', function() {
        translatePage(this.value);
    });
}

// ========== NAVIGATION MOBILE ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
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
}

// ========== SCROLL FLUIDE AVEC TRANSITION ==========
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
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    transition.classList.remove('active');
                    setTimeout(() => transition.remove(), 600);
                }, 600);
            }, 300);
        }
    });
});

// ========== RETOUR EN HAUT ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('active', window.pageYOffset > 300);
    });
}

// ========== ANIMATIONS ==========
// Barres de compétences
const skillBars = document.querySelectorAll('.skill-progress');
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => bar.style.width = width, 100);
    });
}

// Compteurs du dashboard
const projectsCounter = document.getElementById('projectsCount');
const clientsCounter = document.getElementById('clientsCount');
const efficiencyCounter = document.getElementById('efficiencyCount');
const experienceCounter = document.getElementById('experienceCount');

function animateCounter(element, start, end, duration, suffix = '', withBounce = false) {
    if (!element) return;
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

// ========== TÉMOIGNAGES ==========
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;
function showSlide(index) {
    testimonialSlides.forEach(s => s.classList.remove('active'));
    testimonialDots.forEach(d => d.classList.remove('active'));
    if (testimonialSlides[index] && testimonialDots[index]) {
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentSlide = index;
    }
}
testimonialDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});
if (testimonialSlides.length) {
    setInterval(() => showSlide((currentSlide + 1) % testimonialSlides.length), 5000);
}

// ========== FORMULAIRE DE CONTACT ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');

        if (name.value.trim() === '') {
            if (nameError) nameError.style.display = 'block';
            isValid = false;
        } else if (nameError) {
            nameError.style.display = 'none';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            if (emailError) emailError.style.display = 'block';
            isValid = false;
        } else if (emailError) {
            emailError.style.display = 'none';
        }

        if (subject.value.trim() === '') {
            if (subjectError) subjectError.style.display = 'block';
            isValid = false;
        } else if (subjectError) {
            subjectError.style.display = 'none';
        }

        if (message.value.trim() === '') {
            if (messageError) messageError.style.display = 'block';
            isValid = false;
        } else if (messageError) {
            messageError.style.display = 'none';
        }

        if (isValid) {
            alert(translations[languageSelect.value]['form.success'] || 'Message envoyé avec succès!');
            contactForm.reset();
        }
    });
}

// ========== CHAT ==========
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

if (chatButton && chatBox) {
    chatButton.addEventListener('click', () => chatBox.classList.toggle('active'));
}
if (closeChat && chatBox) {
    closeChat.addEventListener('click', () => chatBox.classList.remove('active'));
}

function sendChatMessage() {
    if (!chatInput || !chatMessages) return;
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
            botMsg.textContent = translations[languageSelect.value]['chat.response'] || 'Merci pour votre message !';
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}
if (sendMessage) {
    sendMessage.addEventListener('click', sendChatMessage);
}
if (chatInput) {
    chatInput.addEventListener('keypress', e => e.key === 'Enter' && sendChatMessage());
}

// ========== OBSERVATEUR D'INTERSECTION ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'dashboard') animateCounters();
            if (entry.target.id === 'about') animateSkillBars();
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(s => observer.observe(s));

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.1 });
document.querySelectorAll('.timeline-item, .project-card').forEach(el => timelineObserver.observe(el));

// ========== CURSEUR PERSONNALISÉ ==========
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
if (cursor && cursorFollower) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .timeline-content');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ========== MENU ACTIF ==========
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

// ========== INITIALISATION DES ANIMATIONS SI DÉJÀ VISIBLES ==========
if (window.innerHeight > document.getElementById('about')?.getBoundingClientRect().top) animateSkillBars();
if (window.innerHeight > document.getElementById('dashboard')?.getBoundingClientRect().top) animateCounters();

// ========== PARTICULES ==========
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