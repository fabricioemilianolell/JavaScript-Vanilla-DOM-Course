// const articulos - forEach
const article = document.querySelectorAll(".articles-contenedor");

article.forEach(el => {
        // btnMasMenos button individual
        const btnMasMenos = el.querySelector(".btn-mas-menos")
        
        btnMasMenos.addEventListener("click",function() {
            // for each - remove
            article.forEach(iterador =>{
                
                if (iterador !== el) {
                    iterador.classList.remove("mostrar")
                }
            });
            
            el.classList.toggle("mostrar")
        });
    });


// atravesando el DOM
// const btnMasMenos = document.querySelectorAll(".btn-mas-menos")

// btnMasMenos.forEach(el => {
//     el.addEventListener("click", function(e){
//         // parent element 
//         const article = e.currentTarget.parentElement.parentElement;
//         article.classList.toggle("mostrar")
//     })
// });





