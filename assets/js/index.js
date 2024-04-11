window.addEventListener("load", function(){
    menu();
    port();
    link();
});

function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");
    
            headerToggle.getAttribute("aria-expanded") === "true" 
            ? headerToggle.setAttribute("aria-expanded", "false") 
            : headerToggle.setAttribute("aria-expanded", "true");
        });
    }
}

function link() {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({ behavior: "smooth"});
            }
        });
    });
}

function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}