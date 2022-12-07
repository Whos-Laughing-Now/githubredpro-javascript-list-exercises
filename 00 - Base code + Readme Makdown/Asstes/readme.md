### Modilo JS02

Chapitre II

Exercice 01 : if( ){}, else if( ){};

| Carpetas a entregar | name folder |
| --- | --- |
| Carpeta a entregar Modulo    | JS02 |
| Carpeta a entregar Practica  | C2 |
| Carpeta a exercice           | ex01 |
| fichero a entregar           | indexjs |
| fichero a entregar           | inde.js |




# Project 1 - Item Catalog

## Description
This application provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items..

## Files

* `static`: All assets for CSS (Bootstrap) and JavaScript (jQuery and AlertifyJS).
* `templates`: Templates for HTML content. It contains modals for creating, editing and viewing items catalog.
* `project.py`: main Python script for running the web application.
* `client_secrets.json`: Contains `client_id` and `client_secret` values from Google Web App.
* `database_setup.py`: Setup database mapping creation.
* `google_auth.py`: Google Authentication configuration (credits [Justin-Tadlock](https://github.com/Justin-Tadlock/auth-playground)).
* `populate.py`: Populates the item catalog database (SQLite).
* `secret_key.txt`: Secret key for token generation.
* `readme.md = self`

## Main features
The application meets the following requirements to create the user functionality:

* `JSON endpoint` that serves the same information as displayed in the `HTML endpoints` for an arbitrary item in the catalog.
* Website reads category and item information from a database.
* Website includes a form allowing users to add new items and correctly processes submitted forms.
* Website includes a form to edit/update a current record in the database table and correctly processes submitted forms.
* Website includes a function to delete a current record.
* Create, delete and update operations do consider authorization status prior to execution.
* Implements Google Accounts for authentication and authorization.
* Login and logout buttons.

## Style guide

Python files (`database_setup.py`, `google_auth.py`, `populate.py`) meets PEP 8 style guide.

## Setup and execution

### Virtual machine
Follow this link (Udacity's repo) to get running a virtual machine for development: [here](https://github.com/udacity/fullstack-nanodegree-vm)

This virtual machine contains all of the basic elements to start working a database (PostgreSQL), Python programming language and libraries (SQLAlchemy, Bleach, etc.)

### Database
The following steps are required to get a SQLite database created and populated.
1. Run `python database_setup.py` to create the database schema. This will generate a SQLite file named `itemcatalog.db`.
2. Run `python populate_setup.py` to populate the database.

### Depedencies

This project depends on the following **additional** Python modules installation:

* `$ sudo pip install google-auth`
* `$ sudo pip install flask-cors`

**Note**: Other modules (Flask, SQLAlchemy, etc) has been installed previously on the virtual machine.

### Execution

Type following command to execute the application:

* `$python project.py`: will run the application on `localhost:5000`.

### Instructional/Demonstration Video

https://youtu.be/hZAvGsjxX_Q

### Issues
The virtual machine must have time sync with the server. If you experiment issues while login with the Google Account, please sync the time of the virtual machine with this command (a date/time example is given, do it accordingly with the current date/time):

`$ sudo date --set="2019-08-28 05:41:53.000"`

# Chuleta de JS

## Eventos

### Atributo de HTML

```html
<button onclick="eventoPersonalizado()" ></button>
```

```js
function eventoPersonalizado(){
    console.log( 'Evento!!' )
}
```

## Seleccionar elmentos del DOM 

### Seleccionar un sólo elemento

Query selector devuelve SIEMPRE un sólo elemento HTML; el primero que cumple el selector
```js
let nodoHTML = document.querySelector( 'selector de CSS' )
```


```html
<div id="principal">
```

```js
let nodoPrincipal = document.querySelector( '#principal' )
```

### Seleccionar un GRUPO de elementos

querySelectorALL SIEMPRE devuelve una LISTA de nodos HTML

```js
 // LISTA de NODOS HTML
    let listaCuadrados = document.querySelectorAll( '#grid .cuadrado' );
    console.log( listaCuadrados );

    for( let i = 0; i < listaCuadrados.length; i++ ){

        listaCuadrados[i].style.backgroundColor = 'lightgreen';
    }
```

## Añadir Clases 
Para añadir una clase necesito seleccionar primero el elemento del documento HTML ( DOM )

```html
<div id="miCuadrado"></div>
```

```js
let nodoMiCuadrado = document.querySelector('#miCuadrado');
// Añadir al elemento una clase
nodoMiCuadrado.classList.add( 'animationAppear' );

```

## Cambiar el estilo de un elemento

```js
let nodoPrincipal =  document.querySelector( "#principal" );
nodoPrincipal.style.color = "red";
```

## Pintar en un elemento Web (del DOM)

### innerHTML

NOTA: El contenido que introduzca TIENE QUE ESTAR COMPLETO. Es decir, que no puedo introducir una etiqueta de inicio SIN CIERRE

```html
<div id="datos" ></div>
```

En este punto estoy asignando el nuevo valor PERO NO TENGO EN CUENTA LO QUE HABÍA ANTES
```js
 let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = '<p> Hola contenido creado por JS </p>';
```

```js
 let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = nodoDatos.innerHTML + '<p> Hola contenido creado por JS </p>';
```

RECOMENDACIÓN

Usar una variable STRING que represente el contenido HTML antes de introducirlo en innerHTML
```js

let strHTML = "<h1>HolaMundo</h1>";

nodoDatos.innerHTML = strHTML

```
NOTA: TEMPLATE STRING

Es el caracter ` y me permite crear STRINGs literales.Por ejemplo dar espacios y ENTER . Se usa el ${ } para escribir el valor de una variable de JS

```js
let nombre = 'Curso de JS';
nodoDatos.innerHTML = ` 
    <div class="card">
        <h3> ${ nombre }  </h3>
        <div>
            <p class="parrafo"> Texto </p>
            <p class="parrafo"> Texto </p>
            <p class="parrafo"> Texto </p>
            <p class="parrafo"> Texto </p>
            <p class="parrafo"> Texto </p>
        </div>
    </div> `;

```


```js

let lista_nombres = [ 'Ana' ,'Carlos','Pepe', 'María' ,'Alba' ];
let lista_emojis = [ '😅' ,'🤣','😊', '😇' ,'🥰' ];

// Pintar en #nombres todos los elemenos de la lista nombres

let nodoNombres = document.querySelector( '#nombres' );

console.log( nodoNombres );
let strHTML = "";

for( let i = 0; i < lista_nombres.length ; i++ ){
    console.log( lista_nombres[ i ] );
    //OPCION 1
    // strHTML = strHTML + '<div class="border" >'+ lista_nombres[i] +'<span>'+ lista_emojis[i] +'</span> </div>';
    // OPCIÓN 2: Template String
    strHTML = strHTML + `
        <div class='border'> 
            ${lista_nombres[i]}
            <span>  ${ lista_emojis[i] } </span>
        </div>
    `
}
```


## Acceder al valor de un input 
```html
<input id="entradaNombre">
```

```js
let nodoInput = document.querySelector( '#entradaNombre' );
let nombre = nodoInput.value;
```

## Funciones

Un trozo de código que tiene un nombre. Se puede ejecutar en cualquier momento que se requiera.

Los cometidos de las funciones son:

- Reusar código
- Crear código general
- Aislar la funcionalidad

El return es una palabra reservada que transforma la ejeución de la función en la variable del return

```js

function saluda ( nombre, sexo ){
    let edad = 90;
    // texto es una VARIABLE LOCAL
    let texto = "¡Hola";

    if( sexo === 'M' ){ // Mujer
        texto = texto + ' amiga ';
    }else if(sexo === 'H' ){ // Hombre
        texto = texto + ' amigo ';
    }

    texto = texto +  nombre +"!";

    return texto;
}

let saludoMarta = saluda( 'Marta' , 'M' );

```
## Búcle FOR 

Un trozo de código QUE SE REPITE UN NÚMERO DE VECES DETERMINADO



```js
// FOR -> Búcles
// inicialización; condición ; actualización
for( let i = 0;       i < 10;        i++  ){// i = i + 1

    console.log( 'Hola Mundo FOR' );
    console.log( i );

}// ACTUALIZACIÓN -> i++


for ( let i=0; i<100; i++ ){

    console.log( i )    

}


let listafrutas = [ 'Pera', 'Manzana', 'Fresa' , 'Melocotón', 'Tomate'  ];
// PODEMOS USAR LA HERRAMIENTA DEL FOR PARA RECORRER EL ARRAY

for( let i = 0; i < listafrutas.length ; i++ ){

    console.log( i )
    // console.log( listafrutas[ 0 ] )
    console.log( listafrutas[ i ] )
}

console.log( listafrutas )



```

