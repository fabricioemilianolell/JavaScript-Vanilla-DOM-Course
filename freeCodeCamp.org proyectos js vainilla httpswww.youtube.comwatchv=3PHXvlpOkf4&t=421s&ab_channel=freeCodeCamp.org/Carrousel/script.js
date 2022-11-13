const sliders = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

sliders.forEach( (el,index) => {
    el.style.left =`${index * 100}%`
});

let counter = 0;


nextBtn.addEventListener("click",function(){
counter++;
carrousel();
});

prevBtn.addEventListener("click",function(){
counter--;
carrousel();
});

function carrousel() {
    //condicional sliders - botones

    // if(counter > sliders.length - 1) {
    //     counter = 0
    // }
    // if (counter < 0) {
    //     counter = sliders.length - 1;
    // }

    //condicional botones 
    if(counter < sliders.length - 1) {
        nextBtn.style.display= "block"
    } else {
        nextBtn.style.display = "none"
    }

    if(counter > 0) {
        prevBtn.style.display = "block"
    } else {
        prevBtn.style.display = "none"
    }

    sliders.forEach(el => {
    el.style.transform = `translateX(-${counter * 100}%)`
   }); 
};

prevBtn.style.display = "none"