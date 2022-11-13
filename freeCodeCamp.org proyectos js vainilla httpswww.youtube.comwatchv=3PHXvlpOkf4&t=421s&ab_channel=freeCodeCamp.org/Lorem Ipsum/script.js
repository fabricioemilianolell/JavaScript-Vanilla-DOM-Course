const LoremIpsumTexto = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem delectus eum dolores sequi. Vero, sunt. Voluptatem molestias debitis labore odit hic incidunt dolor blanditiis accusamus alias ipsa! Id reiciendis eius quasi perspiciatis placeat non eaque, est nobis",
    "suscipit perferendis totam fugit nostrum aliquam, architecto vero neque voluptatem quia! Voluptatibus similique reiciendis asperiores voluptatem, sequi sed. Ipsum repellendus dolore, autem placeat quaerat fuga? Voluptatum veritatis saepe aliquam sint magnam corrupti autem nihil",
    "excepturi aspernatur! Nihil consequatur odio facere molestiae vero cum debitis cumque? Pariatur voluptatum, placeat nemo repellendus accusamus laboriosam magni culpa? Eum ut officiis optio facilis blanditiis, recusandae dolor.",
    "incidunt, molestias minima magni possimus mollitia beatae quaerat! Necessitatibus fugiat excepturi amet quia quis officiis, nesciunt odit aliquam nam architecto cupiditate possimus temporibus inventore maxime suscipit voluptate, iure, dolorum doloremque. Ut quae consequuntur distinctio, corrupti recusandae eos est nobis. Dolorum!",
    "laborum, deleniti aperiam repudiandae, amet architecto eveniet quia hic! In animi vel fugiat magni cumque provident nostrum consectetur. Inventore fugiat nostrum pariatur enim excepturi numquam veritatis commodi expedita eum perferendis aspernatur vero voluptates temporibus",
    "aspernatur quo voluptate praesentium natus ex distinctio expedita voluptas suscipit incidunt reprehenderit! Corporis doloremque blanditiis asperiores assumenda voluptatum, distinctio iure, nulla tempora labore neque molestiae sunt nemo? Voluptatum repellendus odio debitis repellat,",
    "soluta fugiat praesentium vitae esse. Aut tenetur delectus et nihil aperiam dolor? Recusandae tempore provident, eius placeat odio nulla repellat libero delectus fugit consequatur pariatur ipsum, iure esse, consequuntur",
    "accusamus aspernatur porro reiciendis. Eveniet obcaecati dolorum error! Dolor ipsum earum ducimus consectetur obcaecati modi minus possimus quibusdam libero tenetur sed accusamus error, veritatis voluptatem quia perferendis iste,",
    "iure excepturi possimus assumenda officia nihil, blanditiis aut atque nulla corporis iste? In, adipisci ut. Tempore eius eaque nobis explicabo recusandae similique magni placeat? Debitis laboriosam beatae atque in necessitatibus quaerat libero omnis sapiente exercitationem, eum"

]

//variables formulario, input, article
const formulario = document.querySelector(".formulario");
const inputNumberLorem = document.getElementById("numberLabel");
const LoremIpsumParrafo = document.querySelector(".Lorem-Ipsum_Texto");

formulario.addEventListener("submit",function(e){
    e.preventDefault();

    //Convertir input string a number - parseInt
    const valorNumber = parseInt(inputNumberLorem.value); 

    const randomNumber = Math.floor(Math.random() * LoremIpsumTexto.length)

     if(isNaN(valorNumber) || valorNumber <= 0 || valorNumber > 9) {
       LoremIpsumParrafo.innerHTML = `<p class="parrafo">${LoremIpsumTexto[randomNumber]}</p>`
        //slice - numero input con el array
     } else {
        let parrafoSlice = LoremIpsumTexto.slice(0,valorNumber)
        parrafoSlice = parrafoSlice.map(el => {
           return `<p class="parrafo">${el}</p>`
        }).join("")
        LoremIpsumParrafo.innerHTML = parrafoSlice
        
     }

     
        
     
});