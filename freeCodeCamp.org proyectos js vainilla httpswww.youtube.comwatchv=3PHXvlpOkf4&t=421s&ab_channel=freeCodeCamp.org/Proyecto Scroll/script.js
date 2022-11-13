//NEW DATE - footer
const year = document.getElementById("año");
year.innerHTML = new Date().getFullYear();

//CLOSE LINK - menu nav agregado dinamicamente 
let listasContenedor = document.querySelector(".listas-contenedor");
const listas = document.querySelector(".listas-ul");
const button  = document.querySelector(".button-nav");

button.addEventListener("click",function (){
    // listas agregadas dinámicamente - getBoundingClientRect()
    const ListasContenedorHeight = listasContenedor.getBoundingClientRect().height; //0px
    const listasHeight = listas.getBoundingClientRect().height; 
    
    if (ListasContenedorHeight === 0) {
        listasContenedor.style.height = `${listasHeight}px`;
    } else {
        listasContenedor.style.height = 0;
    }
});

// FIXED NAVBAR e ICON FIXED
// menu fijo 
const navbarMenu = document.querySelector(".nav-menu");
// icono fijo
const iconoFixed = document.querySelector(".btn-fixed");

// evento scroll - pageYOffset - getBoundingClientRect().height
window.addEventListener("scroll", () => {
    const windowScrollHeight = window.pageYOffset;
    const navbarMenuFixedHeight = navbarMenu.getBoundingClientRect().height;
    
    if(windowScrollHeight > navbarMenuFixedHeight) {
        navbarMenu.classList.add("menu-fixed");
    } else {
        navbarMenu.classList.remove("menu-fixed");
    }

    if (windowScrollHeight > 400) {
        iconoFixed.classList.add("mostrar-icono");
    } else {
        iconoFixed.classList.remove("mostrar-icono");
        
    }
});

// SMOOTH SCROLL preventDefault getAtribute offSetTop scrollTo slice

// listas links <a> - menu
const linksMenuA = document.querySelectorAll(".links");

linksMenuA.forEach(iterador => {
    iterador.addEventListener("click", (e) =>{
        e.preventDefault(); 
        
        const linksHref = e.currentTarget.getAttribute("href").slice(1); 
        const sectionID = document.getElementById(linksHref);
        
        //height nav y listasContenedor
        const navMenuHeight = navbarMenu.getBoundingClientRect().height; 
        const listasHeightContenedor = listasContenedor.getBoundingClientRect().height; 
        const navbarMenuFixed = navbarMenu.classList.contains("menu-fixed");
        let sectionPositionTOP = sectionID.offsetTop; 
        let seccionMenosMenu = sectionPositionTOP - navMenuHeight; 
        
        //navbar position static
        if(!navbarMenuFixed) {
            seccionMenosMenu = seccionMenosMenu - navMenuHeight; //restas 2 veces
        }
        //menu hamburgesa mediaqueries
        if (navMenuHeight > 88) { 
            seccionMenosMenu = seccionMenosMenu + listasHeightContenedor; 
        }

        //scrollTo
        window.scrollTo({
            left: 0,
            top: seccionMenosMenu,
            behavior:"smooth" 
        })
       

        listasContenedor.style.height = 0;
        
    });
    
});
