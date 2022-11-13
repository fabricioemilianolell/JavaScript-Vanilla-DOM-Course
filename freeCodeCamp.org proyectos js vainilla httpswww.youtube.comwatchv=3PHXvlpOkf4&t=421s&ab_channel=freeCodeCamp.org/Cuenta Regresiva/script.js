// array de meses y dias 
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const diasDeLaSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

// 3 variables; sorteo, contenedor d-h-m-s y los d-h-m-s
const sorteoIphone = document.querySelector(".sorteo");
const contenedorTiempo = document.querySelector(".contador-contenedor");
const items = document.querySelectorAll(".contador h4");//nodos h4

// tiempo adelantando 10 días
let tiempoRepetido = new Date();
let tiempoYear = tiempoRepetido.getFullYear()
let tiempoMes = tiempoRepetido.getMonth()
let tiempoDia = tiempoRepetido.getDate()

const datofuturo = new Date(tiempoYear,tiempoMes,tiempoDia + 10, 11, 30, 0);

const year = datofuturo.getFullYear();
const horas = datofuturo.getHours();
const minutos = datofuturo.getMinutes();
const segundos = datofuturo.getSeconds();
let mes = datofuturo.getMonth();
    mes = meses[mes];
const date = datofuturo.getDate();

const dia = diasDeLaSemana[datofuturo.getDay()];

sorteoIphone.textContent = `Se sortea el ${dia} ${date} de ${mes} ${year}, ${horas}: ${minutos}am`;

// milisegundos en el tiempo futuro - dia del sorteo
const milisegundosTiempoFuturo = datofuturo.getTime(); //1587738600000


//function - cuantos dias faltan desde hoy hasta el dia sorteo en mls
function milisegundosDiaDeHoy() {
    const mlsDiaDeHoy = new Date().getTime(); //1663983520991
    // diferencia entre día del sorteo y hoy en mls
    const tiempoRestanteEnMls = milisegundosTiempoFuturo - mlsDiaDeHoy; //2724016946 dinámicos
    // 1 s = 1000ms 
    // 1 min = 60segundos
    // 1 hora = 60minutos
    // 1 dia = 24 horas

    // un dia-hora-minutos cuantos mls tiene - dato estático
    const mlsEnUnDia = 24*60*60*1000;//86400000 fijo mls
    const mlsEnUnaHora = 60*60*1000; //3600000 fijo mls
    const mlsEnUnMin = 60*1000; //6000 fijo mls

    //dias que faltan en mls
    let diasRestantesEnMls = tiempoRestanteEnMls/mlsEnUnDia //2.49022900462963 mls
    diasRestantesEnMls = Math.floor(diasRestantesEnMls); //2 dias
   
    // buscando el resto %
    let horasRestantesFaltan = Math.floor((tiempoRestanteEnMls % mlsEnUnDia) / mlsEnUnaHora); //15 horas 
    let minutosRestantesFaltan = Math.floor((tiempoRestanteEnMls % mlsEnUnaHora) / mlsEnUnMin);
    let segundosRestantesFaltan = Math.floor((tiempoRestanteEnMls % mlsEnUnMin) / 1000);
    console.log(segundos)
    
    // array de los valores d-h-m-s
    const arrayValores = [diasRestantesEnMls,horasRestantesFaltan,minutosRestantesFaltan,segundosRestantesFaltan];

    function agregarCero (siEsMenor) {
        if (siEsMenor < 10) {
            return `0${siEsMenor}`;
        } else {
            return siEsMenor;
        }
    }
    //forEach itera sobre los h4 y coloca los valores
    items.forEach((h4,index) => {
        h4.innerHTML = agregarCero(arrayValores[index]);
    })
    // cuando el tiempo que falta se agoto
    if (tiempoRestanteEnMls < 0) {
        clearInterval(activador);
        contenedorTiempo.innerHTML = `<h4 class="tiempoTermino">El tiempo terminó. El sorte ya se realizó</h4>`
    }
}

// activador del tiempo
let activador = setInterval(milisegundosDiaDeHoy,1000)

milisegundosDiaDeHoy();