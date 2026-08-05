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