const header__nav = document.querySelector(".header__nav");
const BotonMenu = document.querySelector(".botonMenu");

BotonMenu.addEventListener("click", () => {
    console.log('click');
    header__nav.classList.toggle("inactive");
});

console.log('borrame');
