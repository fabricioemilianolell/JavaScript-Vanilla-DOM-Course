// coontador
let count = 0;

const valor = document.querySelector("#valor");
const botones= document.querySelectorAll(".btn");

const arrayColor = ["red","orange","tomato","teal","blue", "azure", "beige", "blueviolet", "brown", "chartreuse", "chocolate", "coral"];

// forEach itera sobre btn 
botones.forEach(function (btn) {
  btn.addEventListener("click", function (e){
    const list = e.currentTarget.classList
    
    if (list.contains("disminuyo")) {
      count--
    } else if (list.contains("incremento")) {
      count++
  } else {
    count = 0
  }
   valor.textContent = count
    valor.style.color = arrayColor[randomColor()]
})
})

// function aleatoria
function randomColor () {
  return Math.floor(Math.random() * arrayColor.length)
}





