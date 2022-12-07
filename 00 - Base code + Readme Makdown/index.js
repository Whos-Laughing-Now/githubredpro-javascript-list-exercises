'use strict'

console.log('Dom Cargado');

// Ejercico que hace parte dela clase 02 LUia Trazos
// Para este ejercicio debemos utilizar las sentencias de control (if else)

// Para todos los ejercicios del modulo JS02 ->>> Crea una caroeta de nombre      ->>>  JS02
// Para cada ejercicio del modulo JS02       ->>> Crea una carpeta con el mombre  ->>>  ex01_estructuras_condicionales
// Nombre del fichero       ->>>   que_edad_tienes.html
// Nombre del fichero       ->>>   que_edad_tienes.js




let nodoMensaje = document.querySelector('#info');
nodoMensaje.innerHTML = "Chapitre XII : Estructura de  control { if else }<br/><br/>" 
+ " Folder  : JS012 C1<br/><br/>"
+ " Folder  : C12<br/><br/>"
+ " File    : index.html<br/><br/>"
+ " File    : index.js <br/><br/>";


//PINTAR EN LA WEB -- TITLE
let nodoTitle = document.querySelector('#title');
// inner sera una propiedad de los elementoas Web (nodos);
nodoTitle.innerHTML = nodoTitle.innerHTML + "<h3> Quiz : Edad suficiente?</h1>";

//PINTAR EN LA WEB -- SUBTITLE
let nodoSubtitulo = document.querySelector('#subtitulo');
// inner sera una propiedad de los elementoas Web (nodos);
nodoSubtitulo.innerHTML = nodoSubtitulo.innerHTML + "<h3> 2 respuestas son posibles... </h3>";

// let nombre = prompt("Introduce tu nombre")
// let edad = prompt("!Hola " + nombre + " Introduce tu edad edad tienes");
 let edad = prompt("!Hola Introduce tu edad edad tienes");


if( edad >= 21){
    
    let nodoEdad = document.querySelector('#edad');
    nodoEdad.innerHTML = nodoEdad.innerHTML + "<h3>Tienes : " + edad + " anos, eres mayor de edad, ya puedes sacarte el carnet de conducir.<h3/>";
    
    let importe = prompt("!Hola Introduce tua ahorros");
    
    if(importe >=900){
        
        nodoEdad.innerHTML = nodoEdad.innerHTML + "<h3>Tienes " + importe + " Euros, tienes direno suficiente para pagarte el carnet de conducir.</h3>";
    }else{
        nodoEdad.innerHTML = nodoEdad.innerHTML + "<h3>Tienes " + importe + " Euros, NO tienes direno suficiente para pagarte el carnet de conducir.</h3>";

    }
}else{
        let nodoEdad = document.querySelector('#edad');
        nodoEdad.innerHTML = nodoEdad.innerHTML + "<h3>Tu edad es de : " + edad + ", anos eres menor de edad, NO puedes sacarte el carnet de conducir</h3>";

        let edadCadidato = 18 - edad;
        nodoEdad.innerHTML = nodoEdad.innerHTML + "<h3>Vuelve dentro de  : " + edadCadidato + " anos, eres menor de edad, NO puedes sacarte el carnet de conducir</h3>";
    }