//Menú
const nuestroMenu = [
    {
        identificador: 1,
        titulo: "Paella Española con camarones",
        categoria: "Paella",
        precio: 200,
        img: "https://img.freepik.com/foto-gratis/paella-espanola-mariscos-mejillones-camarones-etc-paellera-acero-canarias-cocina-pequeno-restaurante-familiar_1217-1763.jpg?w=740&t=st=1662588929~exp=1662589529~hmac=88e40580dab07f6bbe79b578fd4e5b744fda7c725a1903663364358ff31ecf99",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 2,
        titulo: "Tacos Méxicanos",
        categoria: "Paella",
        precio: 250,
        img: "https://img.freepik.com/foto-gratis/tacos-mexicanos-carne-res-salsa-tomate-salsa_2829-14218.jpg?w=740&t=st=1662589515~exp=1662590115~hmac=bd6f1d05f64f8a0ff968f4221c3a6609596f67b31d567e8d993cf13b757fdcdb",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 3,
        titulo: "Espaguetis",
        categoria: "Paella",
        precio: 300,
        img: "https://img.freepik.com/fotos-premium/espaguetis-plato-sobre-fondo-blanco_45583-1179.jpg?w=740",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 4,
        titulo: "Ravioles con Salsa de Tomate",
        categoria: "lasaña",
        precio: 120,
        img: "https://img.freepik.com/foto-gratis/deliciosos-ravioles-salsa-tomate-eneldo_2829-16783.jpg?w=740&t=st=1662589456~exp=1662590056~hmac=3b87efdf2b7d058738342b6b28a1210f9bdffe4a1fb37f96c584cb640834390c",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 5,
        titulo: "Lasaña clásica",
        categoria: "lasaña",
        precio: 80,
        img: "https://img.freepik.com/foto-gratis/lasana-clasica-salsa-bolonesa_2829-11251.jpg?w=740&t=st=1662589420~exp=1662590020~hmac=d2b08e2d36469bca0e98f954af54a582657c5a04d69d45e07a7fa33ad195ad0e",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 6,
        titulo: "Pasta de penne con tomate",
        categoria: "pastas",
        precio: 800,
        img: "https://img.freepik.com/foto-gratis/primer-tiro-pasta-penne-tomate_181624-42934.jpg?w=740&t=st=1662589355~exp=1662589955~hmac=b9a5badba97a79a34c7deb6fa15b3d72e8402c1ded91d944db198c43bdd545ac",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 7,
        titulo: "Pizza con Mozzarella",
        categoria: "pastas",
        precio: 750,
        img: "https://img.freepik.com/foto-gratis/pizza-casera-mozzarella-sobre-fondo-oscuro_1220-4548.jpg?w=740&t=st=1662589315~exp=1662589915~hmac=a3ddbc3cdca8085cc8ae390c9129cb602a576bb0f8d1411c55cb8d0f00b3a36e",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 8,
        titulo: "Ravioles Italianos",
        categoria: "pastas",
        precio: 275,
        img: "https://img.freepik.com/foto-gratis/primer-plano-sabrosos-ravioles-italianos_1220-5142.jpg?w=740&t=st=1662589271~exp=1662589871~hmac=7315eaded6ed7e457c6ac3405a95cfc73ac38f12bca09ea91b5c98a5fde235fd",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    },
    {
        identificador: 9,
        titulo: "filete de ternera",
        categoria: "filetes",
        precio: 350,
        img: "https://img.freepik.com/foto-gratis/filete-ternera-plancha-sobre-superficie-madera-oscura_1150-44344.jpg?w=740&t=st=1662733678~exp=1662734278~hmac=aae567a6d8f0c3618c5142548275e5c9d04ae79d2c4e3e02967771cc2c41d027",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus."
    }
]

//variables articulo contenedor, botones
const contenedorArticle = document.querySelector(".article-contenedor");
const buttonMenu = document.querySelector(".botones-menu");


//evento load - agregar menú dinámicamente
window.addEventListener("DOMContentLoaded", function(){
    contenidoDinamico(nuestroMenu);
    buttonDinamico();
    
});


// 1 funcion contenido dinamico
function contenidoDinamico (menuDinamico) {
    let recorrerArrayObject = menuDinamico.map(function(el) {
        return `<article class="article-menu">
        <img class="img" src="${el.img}" alt="">
            <div class="informacion-Menu">
            <header>
                <h4>${el.titulo}</h4>
                <h5>$${el.precio}</h5>
            </header>
            <p class="parrafo">${el.descripcion}</p>
        </div>
    </article>`
    });
    //método join - array a string
    recorrerArrayObject = recorrerArrayObject.join("");
    contenedorArticle.innerHTML = recorrerArrayObject;
};


// 2 function botones dinámico
function buttonDinamico() {
        //metodo reduce para dividir botones
        const nuestroMenuCategoria = nuestroMenu.reduce(function(acumular, iterador) {
            if (!acumular.includes(iterador.categoria)) {
                acumular.push(iterador.categoria);
            }
            return acumular;
         
        },["all"]);
        
        //método MAP - botones dinámicos
        const buttonCategorias = nuestroMenuCategoria.map(categoriaIterador =>{
            return `<button class="button" data-menu=${categoriaIterador}>${categoriaIterador}</button>`
        }).join("");
        buttonMenu.innerHTML = buttonCategorias;
    
        const button = buttonMenu.querySelectorAll(".button");
        //método forEach - método filter - data set
        button.forEach(item => {
            item.addEventListener("click",function(e){
            const categoriaData = e.currentTarget.dataset.menu;
            const categoriaFilter = nuestroMenu.filter(filtro => {
               if (filtro.categoria === categoriaData) { //paella === paella
                return filtro
               }
            });
            //if productos 
            if (categoriaData === "all") {
                contenidoDinamico(nuestroMenu); //todos los productos
            } else {
                contenidoDinamico(categoriaFilter); //productos filtrados
            }
        });
    });
}



