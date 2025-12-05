// Open & close fruit panel
const openCartBtn = document.getElementById("openCart");
const panel = document.getElementById("fruitPanel");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closePanel");

openCartBtn.addEventListener("click", () => {
    panel.style.display = "block";
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
});

// Close when clicking outside
overlay.addEventListener("click", () => {
    panel.style.display = "none";
    overlay.style.display = "none";
});

// Add-to-Cart notification
let cartCount = 0;
const cartMsg = document.getElementById("cartMsg");

document.querySelectorAll(".addCart").forEach(btn => {
    btn.addEventListener("click", () => {

        cartCount++;

        cartMsg.style.display = "block";
        cartMsg.innerText = "Added! Cart Items: " + cartCount;

        setTimeout(() => cartMsg.style.display = "none", 1500);
    });
});

// Swiper slider settings
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    speed: 1200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
