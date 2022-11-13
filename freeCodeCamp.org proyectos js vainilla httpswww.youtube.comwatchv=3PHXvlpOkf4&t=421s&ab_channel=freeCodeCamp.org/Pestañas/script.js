//variables contenido, botones y textos
const contenedorPrincipal = document.querySelector(".contenedor-principal")
const botones = document.querySelectorAll(".btn-pestañas")
const textos = document.querySelectorAll(".textos")

contenedorPrincipal.addEventListener("click",function(e){
    const datasetID = e.target.dataset.id //data-id botones
    
    //botones
    if (datasetID) {
        //remove class mostrarOcultar - botones
        botones.forEach(iterador =>{
            iterador.classList.remove("mostrarOcultar"); 
            e.target.classList.add("mostrarOcultar");
        });

        //remover class mostrarOcultar - textos
       textos.forEach(el => {
        el.classList.remove("mostrarOcultar");
        });  
    
        //add class mostrarOcultar al texto
        const textosID = document.getElementById(datasetID); //id textos
        textosID.classList.add("mostrarOcultar");
    }

});