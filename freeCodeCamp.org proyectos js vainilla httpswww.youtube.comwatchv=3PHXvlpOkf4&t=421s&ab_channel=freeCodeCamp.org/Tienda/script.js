// VARIABLES 
const alert = document.querySelector(".alerta");
const formulario = document.querySelector(".tienda-form");
const tienda = document.getElementById("tienda");
const enviarBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".tienda-container");
const list = document.querySelector(".tienda-list");
const limpiarBtn = document.querySelector(".clear-btn");

// variables condicionales - tienda de comestibles
let editarElemento;
let editarTrueFalse = false;
let editarID = "";

// EVENTOS

// evento formulario
formulario.addEventListener("submit",anadirItem);
// limpiar los productos - items
limpiarBtn.addEventListener("click",limpiarItem);
//DOMcontentLoad
window.addEventListener("DOMContentLoaded",cargarItem)

// FUNCIONES
function anadirItem(e) {
     e.preventDefault();
     const value = tienda.value; //input
     const id = new Date().getTime().toString();

    // SUBMIT formulario: tres opciones
    // input no vacío: añadir producto a la lista
    if(value  && !editarTrueFalse) {
        crearListaItem(id,value)
        //function display alert
        mostrarAlerta("", "succes");
        //mostrar container - se añaden los productos
        container.classList.add("show-container")
         //añadir LOCAL STORAGE
        anadirLocalStorage(id,value)
        //volver a los valores predeterminados
        volverAlEstadoPorDefecto();

    // input no vacío: editar el producto
    } else if(value  && editarTrueFalse) {
        editarElemento.innerHTML = value;
        mostrarAlerta("Cambio exitoso","success");
         //editar LocalStorage
         editarLocalStorage(editarID,value)
        volverAlEstadoPorDefecto();
    }
    // input está vacío
    else {
        mostrarAlerta("Está vacío", "danger")
    }
}
// alertas danger y succes
function mostrarAlerta(texto, activarColor) {
    alert.textContent = texto;
    alert.classList.add(`alert-${activarColor}`);
    //remover alerta
    setTimeout(function(){
        alert.textContent = "";
    alert.classList.remove(`alert-${activarColor}`);
    }, 1000)
}
//input limpiar productos - items
function limpiarItem () {
    const items = document.querySelectorAll(".tienda-items");
    
    if(items.length > 0){
        items.forEach(function(item) {
          list.removeChild(item)
        })
    }
    container.classList.remove("show-container");
    mostrarAlerta("Lista vacía","danger");
    volverAlEstadoPorDefecto();
    localStorage.removeItem("list");
}
//button delete - productos items
function eliminarItem(e) {
    const element = e.currentTarget.parentElement.parentElement //article
    const id = element.dataset.id
    list.removeChild(element)
    if(list.children.length === 0) {
        container.classList.remove("show-container")
    }
    mostrarAlerta("Los productos fueron removidos", "danger");
    volverAlEstadoPorDefecto();
    //remover productos - localStorage
    removerLocalStorage(id);
}

//button editar - productos items
function editarItem(e) {
    const element = e.currentTarget.parentElement.parentElement //article
    //editar productos -items
    editarElemento = e.currentTarget.parentElement.previousElementSibling; //p class="title"
    //el input value usuario 
    tienda.value = editarElemento.innerHTML
    editarTrueFalse = true;
    editarID = element.dataset.id;
    enviarBtn.textContent = "editar"; 
}

//input a valores predeterminados
function volverAlEstadoPorDefecto() {
    tienda.value = "";
    editarTrueFalse = false;
    editarID = ""
    enviarBtn.textContent = "submit";
}

//añadir LOCAL STORAGE
function anadirLocalStorage(id,value) {
   const tienda = {id, value}; // shorthand{id: id, value: value}; 
    let items = obtenerLocalStorage();
    items.push(tienda)
    localStorage.setItem("list",JSON.stringify(items))
}

//remover productos items - LocalStorage
function  removerLocalStorage(id) {
    let items = obtenerLocalStorage();

    items = items.filter(item => {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}
function editarLocalStorage(id,value) {
    let items = obtenerLocalStorage();
    items = items.map(item => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));

}

function obtenerLocalStorage () {
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : []; //null  
}

//localStorage
// localStorage.setItem("orange",JSON.stringify(["ese"]))
// const oranges = JSON.parse(localStorage.getItem("orange"))
// localStorage.removeItem("oranges")

//DOMcontenLoad
function cargarItem() {
    let items = obtenerLocalStorage();
    if (items.length > 0) {
    items.forEach(item => {
        crearListaItem(item.id,item.value)
    })
    container.classList.add("show-container")
    }
}

function crearListaItem(id,value) {
    const element = document.createElement("article");
    element.classList.add("tienda-items");
    // add id - data-id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <img class="imagen-subir" src="imagenes/icons8-subir-48.png" alt="">
        </button>
        <button type="button" class="delete-btn">
            <img class="imagen-eliminar" src="imagenes/icons8-trash-48.png" alt="">
        </button>
    </div>`;
    const eliminarBtn = element.querySelector(".delete-btn");
    const editarBtn = element.querySelector(".edit-btn");
    eliminarBtn.addEventListener("click",eliminarItem);
    editarBtn.addEventListener("click",editarItem);
    //append child
    list.appendChild(element);
}