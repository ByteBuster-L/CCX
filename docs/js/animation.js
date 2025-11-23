document.addEventListener('DOMContentLoaded', () => {
    // Registramos el plugin ScrollTrigger si GSAP está cargado
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // --- ANIMACIONES DEL HOME (INDEX) ---
        if (document.querySelector('.gsap-hero')) {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            tl.to(".gsap-hero", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2
            });
        }

        if (document.querySelector('.gsap-card')) {
            gsap.fromTo(".gsap-card", 
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".gsap-card",
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2
                }
            );
        }

        // --- ANIMACIONES DE CONTACTO ---
        if (document.querySelector('.gsap-fade-up')) {
            gsap.to(".gsap-fade-up", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }

        // --- ANIMACIONES DE NOSOTROS ---
        if (document.querySelector('.gsap-reveal')) {
            gsap.to(".gsap-reveal", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }

        if (document.querySelector('.trigger-1')) {
            ScrollTrigger.batch(".trigger-1", {
                start: "top 80%",
                onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 0.8, stagger: 0.2})
            });
        }

        if (document.querySelector('.gsap-photo')) {
            gsap.to(".gsap-photo", {
                scrollTrigger: {
                    trigger: ".gsap-photo",
                    start: "top 75%",
                },
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });
        }
        
        // Triggers genéricos para secciones (Cita director, valores)
        if (document.querySelector('.trigger-2')) {
            ScrollTrigger.batch(".trigger-2", {
                start: "top 80%",
                onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 0.8, stagger: 0.2})
            });
        }
        
        if (document.querySelector('.trigger-3')) {
            ScrollTrigger.batch(".trigger-3", {
                start: "top 80%",
                onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 0.6, stagger: 0.15})
            });
        }
    }
});