const menuToggleButton = document.getElementById("menu-toggle-button");
const mobileMenu = document.querySelector(".links-mobile");
const desktopMenu = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

menuToggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    desktopMenu.classList.toggle("hidden");
    hamburger.classList.toggle("rotate-90");
});

