document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
                card.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
let lastScroll = 0;

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".header");
    let scrollY = window.scrollY;
    let opacity = Math.max(1 - scrollY / 300, 0);
    
    navbar.style.opacity = opacity;

    if (scrollY < lastScroll) {
        navbar.style.opacity = "1"; // Kembalikan jika scroll ke atas
    }
    
    lastScroll = scrollY;
});


// Hamburger Menu Script
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
