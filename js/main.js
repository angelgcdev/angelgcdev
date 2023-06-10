const header__nav = document.querySelector(".header__nav");
const BotonMenu = document.querySelector(".botonMenu");
const botonesNav = document.querySelectorAll(".header__link");
const homeButton = document.querySelector(".home__button");
const aboutmeButton= document.querySelector('.aboutme__button');

/*boton menu hamburguesa*/
BotonMenu.addEventListener("click", () => {
  header__nav.classList.toggle("inactive");
});

/*Botones de la barra de navegación*/
botonesNav.forEach((boton) => {
  boton.addEventListener("click", () => {
    header__nav.classList.toggle("inactive");
  });
});

/*Boton de la seccion home */
homeButton.addEventListener("click", () => {
  const sectionPortfolio = document.querySelector("#portfolio");
  sectionPortfolio.scrollIntoView({ behavior: "smooth" });
});

/*Boton de la seccion aboutme */
aboutmeButton.addEventListener('click',()=>{
  const secctionAboutme=document.querySelector('#contact');
  secctionAboutme.scrollIntoView({behavior: 'smooth'});
});
