document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ÍCONES LUCIDE
    ========================================= */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =========================================
       FADE GLOBAL AO ROLAR
    ========================================= */

    const elementosReveal = document.querySelectorAll(".reveal");

    const observerReveal = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("ativo");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementosReveal.forEach((elemento) => {
        observerReveal.observe(elemento);
    });



    /* =========================================
       FADE LATERAL
       SOBRE A AYKOS
    ========================================= */

    const elementosLaterais = document.querySelectorAll(
        ".fade-esquerda, .fade-direita"
    );

    const observerLateral = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("ativo");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.20
        }
    );


    elementosLaterais.forEach((elemento) => {
        observerLateral.observe(elemento);
    });



    /* =========================================
       SOLUÇÕES COMPLETAS
    ========================================= */

    const elementosSolucoes = document.querySelectorAll(
        ".fade-solutions, .fade-solutions-text"
    );

    const observerSolucoes = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.20
        }
    );


    elementosSolucoes.forEach((elemento) => {
        observerSolucoes.observe(elemento);
    });



    /* =========================================
       CARDS DA ÁREA DE ATUAÇÃO
       EFEITO DOMINÓ
    ========================================= */

    const areaCards = document.querySelectorAll(
        ".areas-grid .area-card"
    );


    /*
       Ativa o sistema somente depois
       que o observer foi criado.
    */

    if (areaCards.length > 0) {

        document.documentElement.classList.add("js-enabled");


        const observerCards = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("card-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        areaCards.forEach((card) => {
            observerCards.observe(card);
        });

    }



    /* =========================================
       LEGALIZAÇÃO & REGULARIZAÇÃO
       ENTRADA PELA ESQUERDA
    ========================================= */

    const legalizacao = document.querySelector(
       ".legalizacao-detalhes"
    );


    if (legalizacao) {

        const observerLegalizacao = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "legalizacao-visivel"
                        );

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        observerLegalizacao.observe(legalizacao);

    }



    /* =========================================
       DIFERENCIAIS
    ========================================= */

    const cardsDiferenciais = document.querySelectorAll(
        ".diferencial-item"
    );


    if (cardsDiferenciais.length > 0) {

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

    }



    /* =========================================
       FAQ
    ========================================= */

    const faq = document.querySelector(".faq");


    if (faq) {

        const observerFaq = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "faq-visivel"
                        );

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        observerFaq.observe(faq);

    }



    /* =========================================
       MENU MOBILE
    ========================================= */

    const botaoMenu = document.getElementById("menu-mobile");
    const menuOverlay = document.getElementById("menu-overlay");
    const fecharMenu = document.getElementById("fechar-menu");


    function abrirMenu() {

        if (!menuOverlay) return;

        menuOverlay.classList.add("ativo");

        document.body.style.overflow = "hidden";
    }


    function fecharMenuMobile() {

        if (!menuOverlay) return;

        menuOverlay.classList.remove("ativo");

        document.body.style.overflow = "";
    }


    if (botaoMenu) {

        botaoMenu.addEventListener(
            "click",
            abrirMenu
        );

    }


    if (fecharMenu) {

        fecharMenu.addEventListener(
            "click",
            fecharMenuMobile
        );

    }


    /* Fecha ao clicar em qualquer link */

    const linksMenu = document.querySelectorAll(
        ".menu-mobile-links a"
    );


    linksMenu.forEach((link) => {

        link.addEventListener(
            "click",
            fecharMenuMobile
        );

    });



    /* =========================================
       FECHAR MENU COM ESC
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                fecharMenuMobile();

            }

        }
    );

});



document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".fade-left, .fade-right");

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Para a animação não ficar repetindo
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });

});