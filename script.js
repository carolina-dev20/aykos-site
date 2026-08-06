lucide.createIcons();


const elementosReveal = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('ativo');

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});


elementosReveal.forEach((elemento) => {
    observer.observe(elemento);
});

const elementosLaterais = document.querySelectorAll(
    '.fade-esquerda, .fade-direita'
);

const observerLaterais = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('ativo');

            observerLaterais.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});


elementosLaterais.forEach((elemento) => {
    observerLaterais.observe(elemento);
});




/* =========================================
   FADE AO ROLAR A PÁGINA
========================================= */

const elementosFade = document.querySelectorAll(
    ".fade-esquerda, .fade-direita"
);

const observadorFade = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("ativo");

                // anima somente uma vez
                observadorFade.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.20
    }
);

elementosFade.forEach((elemento) => {
    observadorFade.observe(elemento);
});


/* =========================
   MENU MOBILE
========================= */

const botaoMenu = document.getElementById("menu-mobile");
const menuOverlay = document.getElementById("menu-overlay");
const fecharMenu = document.getElementById("fechar-menu");

botaoMenu.addEventListener("click", () => {
    menuOverlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
});

fecharMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("ativo");
    document.body.style.overflow = "";
});


/* fecha ao clicar em um link */

document.querySelectorAll(".menu-mobile-links a").forEach(link => {

    link.addEventListener("click", () => {

        menuOverlay.classList.remove("ativo");

        document.body.style.overflow = "";

    });

});

/* ========================================
   MENU MOBILE
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const botaoMenu = document.getElementById("menu-mobile");
    const menuOverlay = document.getElementById("menu-overlay");
    const fecharMenu = document.getElementById("fechar-menu");

    botaoMenu.addEventListener("click", function () {
        menuOverlay.classList.add("ativo");
        document.body.style.overflow = "hidden";
    });

    fecharMenu.addEventListener("click", function () {
        menuOverlay.classList.remove("ativo");
        document.body.style.overflow = "";
    });

    const links = document.querySelectorAll(".menu-mobile-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            menuOverlay.classList.remove("ativo");
            document.body.style.overflow = "";
        });
    });

});


/* Fecha o menu ao clicar em um link */

document.querySelectorAll(".menu-mobile-links a").forEach(function(link) {

    link.addEventListener("click", function () {

        menuOverlay.classList.remove("ativo");

        document.body.style.overflow = "";

    });

});


/* ==========================================
   FADE FAQ AO ENTRAR NA TELA
========================================== */

const faq = document.querySelector(".faq");

if (faq) {
    const faqObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("faq-visivel");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    faqObserver.observe(faq);
}

/* =========================================
   ANIMAÇÃO DOS DIFERENCIAIS
========================================= */

const cardsDiferenciais = document.querySelectorAll(".diferencial-item");

const observerDiferenciais = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("aparecer");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.20
    }
);

cardsDiferenciais.forEach((card) => {
    observerDiferenciais.observe(card);
});