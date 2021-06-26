const boton = document.querySelector(".navbar__btn");
const menu = document.querySelector(".navbar__grupo");



boton.addEventListener("click", () => {
    menu.classList.toggle("navbar__grupo-visible");
})