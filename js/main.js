/**
 * BARBERSHOP SCRIPT - VERSÃO UNIFICADA
 */

// --- 1. GERENCIAMENTO DO PRELOADER (TELA DE CARREGAMENTO) ---
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('loader-finish')) {
        preloader.classList.add('loader-finish');
        
        // Remove do DOM após a transição para evitar interferência em cliques
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000); 
    }
}

// Executa se a página já carregou ou quando terminar de carregar
if (document.readyState === 'complete') {
    hidePreloader();
} else {
    window.addEventListener('load', hidePreloader);
}

// Trava de segurança: Se o site demorar mais de 4s para carregar, força a entrada
setTimeout(hidePreloader, 4000);


// --- 2. MENU MOBILE (HAMBÚRGUER) ---
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });
}

// Fecha o menu ao clicar em qualquer link (importante para UX mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});


// --- 3. EFEITO STICKY NAV (MENU FIXO AO ROLAR) ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// --- 6. SCROLL SUAVE PARA LINKS INTERNOS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + (target > 100 ? '+' : '');
            }
        };
        updateCount();
    });
};

// Disparar quando a seção estiver visível (opcional com Intersection Observer)
startCounters();

// Lógica do FAQ Acordeão
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});

var testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        768: { slidesPerView: 2 }
    }
});

//  custon Scroll bar 

window.onscroll = function() {mufuncion()};

function mufuncion(){
    var winScrool = document.body.scrollTop || document.documentElement.scrollTop;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScrool / height) * 100;

    document.getElementById('scroll-bar').style.width = scrolled + '%';
};