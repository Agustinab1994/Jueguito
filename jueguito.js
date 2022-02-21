/////////////////////////////////////////////////////////////////////////////////////
////////////////      CODIGO DE LA FECHA ACTUAL      ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



const hoy = new Date();
const anio = hoy.getFullYear();
const mes = hoy.getMonth();
const mesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const fecha = hoy.getDate();
const dia = hoy.getDay();
const diaNombres = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const horas = hoy.getHours();
const minutos = hoy.getMinutes();
const segundos = hoy.getSeconds();


document.querySelector("#fecha-actual").innerText = `Hoy es ${diaNombres[dia]} ${fecha} de ${mesNombres[mes]}`

if (horas < 12) {
    document.querySelector("#hora-actual").innerText = `La hora es ${horas} : ${minutos} : ${segundos} AM`;
} else {
    document.querySelector("#hora-actual").innerText = `La hora es ${horas} : ${minutos} : ${segundos} PM`;
}




/////////////////////////////////////////////////////////////////////////////////////
//////////////////        CODIGO DE NIGHT/LIGHT MODE       //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



document.getElementById("night-mode").onclick = nightMode;

function nightMode() {
    document.querySelector("header").style.backgroundColor = "#1f1f1f";
    document.querySelector("header").style.borderTop = "2px double #000000";
    document.querySelector("header").style.borderBottom = "2px double #000000";
    document.querySelector("body").style.color = "#ffffff";
    document.querySelector("body").style.backgroundColor = "#000000";
    document.querySelector("main").style.backgroundColor = "#5e5e5e";
    document.querySelector("main").style.borderBottom = "3px inset #1f1f1f";
    document.querySelector("main").style.borderLeft = "3px groove #1f1f1f";   
}


document.getElementById("light-mode").onclick = lightMode;

function lightMode() {
    document.querySelector("header").style.backgroundColor = "#ffcccf";
    document.querySelector("header").style.borderTop = "2px double #f7adb2";
    document.querySelector("header").style.borderBottom = "2px double #f7adb2";
    document.querySelector("body").style.color = "#000000";
    document.querySelector("body").style.backgroundColor = "#ffc98c";
    document.querySelector("main").style.backgroundColor = "#bdd8fa";
    document.querySelector("main").style.borderBottom = "3px inset #97bce9";
    document.querySelector("main").style.borderLeft = "3px groove #97bce9"; 
}




/////////////////////////////////////////////////////////////////////////////////////
///////////////////      CODIGO DE MINI JUEGO NIVEL 1        ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



function respuesta(){
    let level1 = document.getElementsByName("animales");
    let animal = document.getElementById("animal");
    if (level1[0].checked || level1[2].checked) {  
        document.querySelector("#respuesta").innerText = "Incorrecto, intenta otra vez";
    } else if (level1[1].checked) {
        animal.src = "imagenes/ele.png";
        document.querySelector("#respuesta").innerText = "Correcto";
        let link = document.createElement('a');
        link.textContent = "Siguiente nivel"
        link.href = "#level2";
        document.getElementById("next-level").appendChild(link);
        document.getElementById("boton1").disabled = true;
    } else {
        return false;
    }
} 




/////////////////////////////////////////////////////////////////////////////////////
//////////////////        CODIGO DE MINI JUEGO NIVEL 2       ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



function respuesta2(){
    let level2 = document.getElementsByName("animales2");
    let animal2 = document.getElementById("animal2");
    if (level2[1].checked || level2[2].checked) {  
        document.querySelector("#respuesta2").innerText = "Incorrecto, intenta otra vez";
    } else if (level2[0].checked) {
        animal2.src = "imagenes/coco.png";
        document.querySelector("#respuesta2").innerText = "Correcto";
        let link = document.createElement('a');
        link.textContent = "Siguiente nivel"
        link.href = "#level3";
        document.getElementById("next-level2").appendChild(link);
        document.getElementById("boton2").disabled = true;
    } else {
        return false;
    }
} 



