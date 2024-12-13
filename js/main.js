(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    smoothTouch: 0.1
})
})();

(() => {
    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    burger.addEventListener("click", () => {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    });
})();

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        gsap.from("#hero-text-1", { opacity: 0, y: 50, duration: 1 });
        gsap.from("#hero-text-2", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
        gsap.from(".arrow-down", { opacity: 0, y: 20, duration: 1, delay: 1.2 });
    });
})();

(() => {
    document.querySelectorAll("#contact-hero-form input, #contact-hero-form textarea").forEach((element) => {
        element.addEventListener("focus", () => {
            gsap.to(element, { scale: 1.02, duration: 0.3, ease: "power1.out" });
        });
        element.addEventListener("blur", () => {
            gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.in" });
        });
    });
})();
