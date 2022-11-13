// variables boton activador del menu, contenedor menú, boton escape

const btnMostrarMenu = document.querySelector(".btn-activador");
const menuSidebar = document.querySelector(".contenedor-sidebar");
const btnEscape = document.querySelector(".btn-escape");

btnMostrarMenu.addEventListener("click", function() {
    if (menuSidebar.classList.contains("mostrarOcultar-menu")){
        menuSidebar.classList.remove("mostrarOcultar-menu");
    } else {
        menuSidebar.classList.add("mostrarOcultar-menu");
    }
    btnMostrarMenu.style.display = "none";
});

btnEscape.addEventListener("click", () =>{
    // toggle 
    menuSidebar.classList.toggle("mostrarOcultar-menu");
    btnMostrarMenu.style.display = "block";
    menuSidebar.classList.add("transition")
});

