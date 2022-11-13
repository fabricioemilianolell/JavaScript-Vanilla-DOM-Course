const btn = document.querySelector(".btn-nav");
const listas = document.querySelector(".listas-nav");
const contenedorColor = document.querySelector(".contenedor")

const array = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

btn.addEventListener("click", function() {
    // if
    // if(listas.classList.contains("listas-nav-activado")) {
    //     listas.classList.remove("listas-nav-activado")
    // } else {
    //     listas.classList.add("listas-nav-activado")
    // }

    // toggle 
    listas.classList.toggle("listas-nav-activado")
    btn.classList.toggle("btn-nav-transition")
    let color = "#" //acumulador
    for(let i = 0; i < 6; i++) {
        color += array[random()]
    }
    contenedorColor.style.backgroundColor = color
});


function random() {
    return Math.floor(Math.random() * array.length)
}
