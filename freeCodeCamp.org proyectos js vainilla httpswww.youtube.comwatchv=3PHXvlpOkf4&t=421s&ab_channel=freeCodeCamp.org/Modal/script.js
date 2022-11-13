// variables boton principal adelante, contenedor fixed y boton icono fixed
const btnPrin = document.querySelector(".btn-principal");
const contenedorFix = document.querySelector(".contenedor-background")
const btnVisible = document.querySelector(".btn-escape");

// boton principal - class btn-visibility
 btnPrin.addEventListener("click", function() {
     contenedorFix.classList.add("btn-visibility");
 });

 // boton secundario remove class btn-visibility - hidden
 btnVisible.addEventListener("click", function(){
     contenedorFix.classList.remove("btn-visibility")
});

// if
// btnPrin.addEventListener("click", function() {
//     if(contenedorFix.classList.contains("btn-visibility")) {
//         contenedorFix.classList.remove("btn-visibility")
//     } else {
//         contenedorFix.classList.add("btn-visibility")
//     }
// });

// btnVisible.addEventListener("click", function(){
//     if (contenedorFix.classList.contains("btn-visibility")) {
//         contenedorFix.classList.remove("btn-visibility")
//     }
// });