const personas = [
    {
        Identificador: 1,
        nombre: "Juana Rodriguez",
        img: "https://img.freepik.com/foto-gratis/primer-plano-mujer-joven-rubia-encantadora-alegre-viste-camiseta-blanca_295783-1041.jpg?w=740&t=st=1662423058~exp=1662423658~hmac=e04518bc7579212c4c0f43369a1a262b056c3acf76be3c716eacf8a72b9499dd",
        
        profesion: "Abogada",
        parrafo: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        identificador: 2,
        nombre: "Agustín Chavez",
        img: "./imagenes/img.jpg", 
        profesion: "Administrativo",
        parrafo: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
    },
    {
        Identificador: 3,
        nombre: "Carlos Martinez",
        img: "https://img.freepik.com/foto-gratis/retrato-hombre-camisa-blanca_171337-11986.jpg?w=740&t=st=1662509437~exp=1662510037~hmac=c9e25b3401201a47486fcc4b22503f8729bba561085884d31b18ad8a77fd7a7f",
        profesion: "Ingeniero",
        parrafo: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
    },
    {
        Identificador: 4,
        nombre: "Pamela Antematen",
        img: "https://img.freepik.com/foto-gratis/primer-plano-mujer-profesional-exitosa-oficina-director-general-que-usa-traje-blanco-negocios-brazos-cruzados-pecho-mira-lado-logotipo-texto-promocional-sobre-fondo-estudio_176420-54945.jpg?w=740&t=st=1662428302~exp=1662428902~hmac=e5759569c2b38ea72ede125a9b0bf872779ecc2a75b93277cf5b523c84378ebb",
        profesion: "Médica",
        parrafo: "ent, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simp."
    },
]

//variables 
const imagen = document.querySelector(".img");
const nombre = document.querySelector(".nombre");
const prof = document.querySelector(".profesion");
const parr = document.querySelector(".parrafo-contenido");
const buttonNext = document.getElementById("button-next");
const buttonPrev = document.getElementById("button-prev");
const buttonRandom = document.getElementById("button-random");

//iterador array-objeto
let value = 0;

//function slider
function arrayPersona (valuePerson) { //valuePerson=>value
    let arrayValue = personas[valuePerson]; //person-value
    imagen.src = arrayValue.img;  //personas[0].img
    nombre.textContent = arrayValue.nombre;
    prof.textContent = arrayValue.profesion;
    parr.textContent = arrayValue.parrafo;
};

//Evento DOMContentLoad
window.addEventListener("DOMContentLoaded", function(){
    arrayPersona(value); //personas 0
});


//boton next - value++
buttonNext.addEventListener("click", () => {
    value++;
    if (value > personas.length - 1) {
        value = 0
    }
    arrayPersona(value);
});

//boton prev - value--
buttonPrev.addEventListener("click", () => {
    value--;
    if (value < 0) {
        value = personas.length - 1; //array 3
    }
    arrayPersona(value);
});

//Random aleatorio
buttonRandom.addEventListener("click", ()=> {
    value = (Math.floor(Math.random() * personas.length));
    arrayPersona(value);
});