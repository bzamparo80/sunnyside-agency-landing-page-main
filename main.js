<<<<<<< HEAD
const nav = document.querySelector(".navbar-nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelector(".nav-link");

const navToggleFunc = function () {
    nav.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener("click", navToggleFunc);
=======
const nav = document.querySelector(".navbar-nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelector(".nav-link");

const navToggleFunc = function () {
    nav.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener("click", navToggleFunc);
>>>>>>> be4aa6061f028674d5a177b5aa5a79322e1795f0
}