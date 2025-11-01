// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Acordeão para o FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            // Fecha todos os outros itens do acordeão
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherHeader.nextElementSibling;
                if (otherItem !== accordionItem && otherContent.classList.contains('active')) {
                    otherContent.classList.remove('active');
                    otherHeader.classList.remove('active');
                }
            });

            // Alterna o item clicado
            accordionContent.classList.toggle('active');
            header.classList.toggle('active');
        });
    });

    // Adiciona smooth scrolling para links internos (âncoras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu hambúrguer se estiver aberto
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});