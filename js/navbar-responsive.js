const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".container-links-button");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("container-links-button_active");
});