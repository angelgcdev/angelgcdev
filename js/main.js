const botonMenu = document.querySelector(".botonMenu");
const homeButton = document.querySelector(".home__button");
const aboutmeButton = document.querySelector(".aboutme__button");

const headerNav = document.querySelector(".header__nav");
const navbarButtons = document.querySelectorAll(".header__link");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");

/**Desplazamiento suave a una seccion*/
homeButton.addEventListener("click", () => {
  portfolio.scrollIntoView({ behavior: "smooth" });
});

aboutmeButton.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

/**muestra u oculta botones */
const clickHandler = () => {
  headerNav.classList.toggle("inactive");
};

function mostrarOcultarBoton() {
  /**Obtener el tamaño de la pantalla */
  let ancho =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (ancho >= 768) {
    headerNav.classList.remove("inactive");
    navbarButtons.forEach((boton) => {
      boton.removeEventListener("click", clickHandler);
    });
  } else {
    headerNav.classList.add("inactive");

    /*Mostrar y ocultar el menu navbar */
    botonMenu.addEventListener("click", clickHandler);

    /**ocultar los botones navbar */
    navbarButtons.forEach((boton) => {
      boton.addEventListener("click", clickHandler);
    });
  }
}

//Ejecuta la función cuando termina de cargar la página
window.onload = mostrarOcultarBoton;

//Registra la funcion como un controlador del evento resize se ejecuta
window.addEventListener("resize", mostrarOcultarBoton);
