//variables botton, video
const video = document.querySelector(".video");
const boton = document.querySelector(".button");

const titulo = document.querySelector(".titulo");
let tituloTexto = titulo.innerHTML //video
titulo.innerHTML = ""; //vacio load pagina
let i = 0;

function correrLetras () {
if (i < tituloTexto.length) {
    titulo.innerHTML += tituloTexto.charAt(i);
    setTimeout(correrLetras,300);
    i++;
    }
};
setTimeout(correrLetras,300); 

let colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


boton.addEventListener("click", function (){
    let hexa = "#"
for (let i = 0; i < 6; i++) {
    hexa += colors[random()]
}

    if (!boton.classList.contains("left")) {
        boton.classList.add("left");
        video.pause();
        titulo.textContent = "Pause";
        titulo.style.color = hexa;
        
    } else { 
        boton.classList.remove("left");
        video.play();
        titulo.textContent = "Play";
        titulo.style.color = hexa;
    }
});

function random() {
    return Math.floor(Math.random() * colors.length)
}

// preloader-ocultar al cargar pagina 
const preloader = document.querySelector(".preloader");
    
    window.addEventListener("load", function() {
        preloader.classList.add("preloader-ocultar")
    });



