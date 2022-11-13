
const btn3 = document.querySelector("#button"),
      div_caja = document.querySelector(".div_caja");

const arrayColor = ["orange", "blue", "red", "green", "tomato", "yellow", "violet", "silver", "maroon", "antiquewhite", "teal"];

btn3.addEventListener("click", function () {
  const number = random();
  div_caja.textContent = arrayColor[number];
   div_caja.style.textTransform = "uppercase";
  //div donde se ven los colores  
  div_caja.style.backgroundColor = arrayColor[number];
})

function random () {
  return Math.floor(Math.random() * arrayColor.length);
}

//Hexadecimal 
const caja_hexa = document.querySelector(".div_hexa");

const hexaAleatorio = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn3.addEventListener("click", function () {
    let hexa = "#";
    for (let i = 0; i < 6; i++) {
      hexa += hexaAleatorio[hexa_random()];
    }
    
    caja_hexa.textContent = hexa;
    caja_hexa.style.backgroundColor = hexa;
})

// funcion array aleatoria
function hexa_random() {
  return Math.floor(Math.random() * hexaAleatorio.length);
}
