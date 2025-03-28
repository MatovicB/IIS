document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    });
});
