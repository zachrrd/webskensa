document.addEventListener('DOMContentLoaded', function() {
    // Grab all clickable logos
    var logos = document.querySelectorAll('.toggle-logo');
    
    // For each logo, find its panel and toggle it
    logos.forEach(function(logo) {
      logo.addEventListener('click', function() {
        // The .profile-item container
        var parentItem = logo.closest('.profile-item');
        // The hidden panel inside that item
        var panel = parentItem.querySelector('.logo-segment');
        
        // Toggle the .visible class
        panel.classList.toggle('visible');
      });
    });
  });
  
  // Ambil elemen
  document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let popupImg = document.getElementById("popup-img");
  let closeBtn = document.querySelector(".close");

  // Ambil semua tombol "Let's Go!"
  let buttons = document.querySelectorAll(".letsGoBtn");

  buttons.forEach((button) => {
      button.addEventListener("click", function () {
          let imgSrc = this.getAttribute("data-image"); // Ambil gambar dari data-attribute
          
          popupImg.src = imgSrc; // Set gambar di popup
          popup.style.display = "flex"; // Tampilkan popup
      });
  });

  // Tombol Close untuk menutup popup
  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // Klik di luar popup untuk menutup
  window.addEventListener("click", function (event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  });
});

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

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Mencegah event bubbling
  nav.classList.toggle("active");
});

// Menutup menu saat link diklik
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active"); // Menutup menu saat link diklik
  });
});

// Menutup menu saat klik di luar
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active"); // Menutup menu saat klik di luar
  }
});