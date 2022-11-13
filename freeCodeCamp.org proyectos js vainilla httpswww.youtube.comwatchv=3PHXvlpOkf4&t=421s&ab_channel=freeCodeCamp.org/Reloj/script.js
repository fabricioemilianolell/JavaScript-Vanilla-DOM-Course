function contenidoHora() {
    let fechaActual = new Date();
    let diaHoy = fechaActual.getDate();
    let diaSemana = fechaActual.getDay();
    let mes = fechaActual.getMonth();
    let anual = fechaActual.getFullYear();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    let mt;

    let diaSemanaText = document.querySelector(".semana-dia");
    let diaNumero = document.querySelector(".dia-numero");
    let mesText = document.querySelector(".mes");
    let year = document.querySelector(".anual");
    let mañanaTarde = document.querySelector(".mañana-tarde");
    let horasReloj = document.querySelector(".horas-reloj");
    let min = document.querySelector(".minutos");
    let sec = document.querySelector(".segundos");
    let contenedorHora = document.querySelector(".contenedor-hora")

    // dia de la semana + dia numero + mes + año
    let arraydiaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
    diaSemanaText.textContent = arraydiaSemana[diaSemana];
    
    diaNumero.textContent = diaHoy

    let meses = ["Enero","Febrero","Marzo","Abril","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    mesText.textContent = meses[mes]

    year.textContent = anual;

    // hora + minutos + segundos

    //  Reloj 12 horas
     if(hora >= 12) {
        hora = hora - 12
        mt = "PM"
     } else {
        mt = "AM"
     }

     if (hora == 0) {
        hora = 12 
     }

     horasReloj.textContent = hora;
     mañanaTarde.textContent = mt;

    //  minutos
     if (minutos < 10) {
        minutos = "0" + minutos
     }
     min.textContent = minutos;

    //  segundos
     if (segundos < 10) {
        segundos = "0" + segundos
     }
     sec.textContent = segundos;

};

// set interval
let actualizarInterval = setInterval(contenidoHora, 1000)
console.log(contenidoHora());

