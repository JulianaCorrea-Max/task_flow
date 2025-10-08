document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile com Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Acessibilidade: Atualiza o aria-label para indicar o estado do menu
        const isOpen = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    
    // 2. Efeito de Rolagem Suave (Smooth Scroll)
    // O `scroll-behavior: smooth;` no CSS já cuida da maior parte,
    // mas este script garante compatibilidade e fecha o menu mobile ao clicar em um link.
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Fecha o menu mobile se estiver aberto
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-label', 'Abrir menu');
            }

            // O smooth scroll já é feito pelo CSS, mas se precisar de mais controle:
            // e.preventDefault();
            // const targetId = e.currentTarget.getAttribute('href');
            // document.querySelector(targetId).scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start'
            // });
        });
    });

    // 3. Validação Básica de Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        formStatus.textContent = ''; // Limpa mensagens anteriores
        formStatus.style.color = '';

        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Por favor, preencha todos os campos.';
            formStatus.style.color = 'red';
            return;
        }
        
        // Simulação de envio bem-sucedido
        formStatus.textContent = 'Mensagem enviada com sucesso!';
        formStatus.style.color = 'green';
        
        contactForm.reset(); // Limpa o formulário
    });
    
    // 4. Animação de Fade-in em Seções ao Rolar
    // Usa a Intersection Observer API para performance
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // observa a viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção precisa estar visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deixa de observar após animar
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden'); // Esconde todas as seções inicialmente
        observer.observe(section);
    });
});