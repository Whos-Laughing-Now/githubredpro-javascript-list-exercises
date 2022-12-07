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

<h3>Modilo JS02</h3>
<p>Chapitre II</p>
<p>Exercice 01 : if( ){}, else if( ){};</p>
<table>
<thead>
<tr>
<th>Carpetas a entregar</th>
<th>name folder</th>
</tr>
</thead>
<tbody>
<tr>
<td>Carpeta a entregar Modulo</td>
<td>JS02</td>
</tr>
<tr>
<td>Carpeta a entregar Practica</td>
<td>C2</td>
</tr>
<tr>
<td>Carpeta a exercice</td>
<td>ex01</td>
</tr>
<tr>
<td>fichero a entregar</td>
<td>indexjs</td>
</tr>
<tr>
<td>fichero a entregar</td>
<td>inde.js</td>
</tr>
</tbody>
</table>
<h1>Project 1 - Item Catalog</h1>
<h2>Description</h2>
<p>This application provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items..</p>
<h2>Files</h2>
<ul>
<li>
<code>static</code>: All assets for CSS (Bootstrap) and JavaScript (jQuery and AlertifyJS).</li>
<li>
<code>templates</code>: Templates for HTML content. It contains modals for creating, editing and viewing items catalog.</li>
<li>
<code>project.py</code>: main Python script for running the web application.</li>
<li>
<code>client_secrets.json</code>: Contains <code>client_id</code> and <code>client_secret</code> values from Google Web App.</li>
<li>
<code>database_setup.py</code>: Setup database mapping creation.</li>
<li>
<code>google_auth.py</code>: Google Authentication configuration (credits <a href="https://github.com/Justin-Tadlock/auth-playground">Justin-Tadlock</a>).</li>
<li>
<code>populate.py</code>: Populates the item catalog database (SQLite).</li>
<li>
<code>secret_key.txt</code>: Secret key for token generation.</li>
<li>
<code>readme.md = self</code>
</li>
</ul>
<h2>Main features</h2>
<p>The application meets the following requirements to create the user functionality:</p>
<ul>
<li>
<code>JSON endpoint</code> that serves the same information as displayed in the <code>HTML endpoints</code> for an arbitrary item in the catalog.</li>
<li>Website reads category and item information from a database.</li>
<li>Website includes a form allowing users to add new items and correctly processes submitted forms.</li>
<li>Website includes a form to edit/update a current record in the database table and correctly processes submitted forms.</li>
<li>Website includes a function to delete a current record.</li>
<li>Create, delete and update operations do consider authorization status prior to execution.</li>
<li>Implements Google Accounts for authentication and authorization.</li>
<li>Login and logout buttons.</li>
</ul>
<h2>Style guide</h2>
<p>Python files (<code>database_setup.py</code>, <code>google_auth.py</code>, <code>populate.py</code>) meets PEP 8 style guide.</p>
<h2>Setup and execution</h2>
<h3>Virtual machine</h3>
<p>Follow this link (Udacity's repo) to get running a virtual machine for development: <a href="https://github.com/udacity/fullstack-nanodegree-vm">here</a></p>
<p>This virtual machine contains all of the basic elements to start working a database (PostgreSQL), Python programming language and libraries (SQLAlchemy, Bleach, etc.)</p>
<h3>Database</h3>
<p>The following steps are required to get a SQLite database created and populated.</p>
<ol>
<li>Run <code>python database_setup.py</code> to create the database schema. This will generate a SQLite file named <code>itemcatalog.db</code>.</li>
<li>Run <code>python populate_setup.py</code> to populate the database.</li>
</ol>
<h3>Depedencies</h3>
<p>This project depends on the following <strong>additional</strong> Python modules installation:</p>
<ul>
<li>
<code>$ sudo pip install google-auth</code>
</li>
<li>
<code>$ sudo pip install flask-cors</code>
</li>
</ul>
<p><strong>Note</strong>: Other modules (Flask, SQLAlchemy, etc) has been installed previously on the virtual machine.</p>
<h3>Execution</h3>
<p>Type following command to execute the application:</p>
<ul>
<li>
<code>$python project.py</code>: will run the application on <code>localhost:5000</code>.</li>
</ul>
<h3>Instructional/Demonstration Video</h3>
<p><a href="https://youtu.be/hZAvGsjxX_Q">https://youtu.be/hZAvGsjxX_Q</a></p>
<h3>Issues</h3>
<p>The virtual machine must have time sync with the server. If you experiment issues while login with the Google Account, please sync the time of the virtual machine with this command (a date/time example is given, do it accordingly with the current date/time):</p>
<p><code>$ sudo date --set=&quot;2019-08-28 05:41:53.000&quot;</code></p>
<h1>Chuleta de JS</h1>
<h2>Eventos</h2>
<h3>Atributo de HTML</h3>
<pre><code class="language-html">&lt;button onclick=&quot;eventoPersonalizado()&quot; &gt;&lt;/button&gt;
</code></pre>
<pre><code class="language-js">function eventoPersonalizado(){
    console.log( 'Evento!!' )
}
</code></pre>
<h2>Seleccionar elmentos del DOM</h2>
<h3>Seleccionar un sólo elemento</h3>
<p>Query selector devuelve SIEMPRE un sólo elemento HTML; el primero que cumple el selector</p>
<pre><code class="language-js">let nodoHTML = document.querySelector( 'selector de CSS' )
</code></pre>
<pre><code class="language-html">&lt;div id=&quot;principal&quot;&gt;
</code></pre>
<pre><code class="language-js">let nodoPrincipal = document.querySelector( '#principal' )
</code></pre>
<h3>Seleccionar un GRUPO de elementos</h3>
<p>querySelectorALL SIEMPRE devuelve una LISTA de nodos HTML</p>
<pre><code class="language-js"> // LISTA de NODOS HTML
    let listaCuadrados = document.querySelectorAll( '#grid .cuadrado' );
    console.log( listaCuadrados );

    for( let i = 0; i &lt; listaCuadrados.length; i++ ){

        listaCuadrados[i].style.backgroundColor = 'lightgreen';
    }
</code></pre>
<h2>Añadir Clases</h2>
<p>Para añadir una clase necesito seleccionar primero el elemento del documento HTML ( DOM )</p>
<pre><code class="language-html">&lt;div id=&quot;miCuadrado&quot;&gt;&lt;/div&gt;
</code></pre>
<pre><code class="language-js">let nodoMiCuadrado = document.querySelector('#miCuadrado');
// Añadir al elemento una clase
nodoMiCuadrado.classList.add( 'animationAppear' );

</code></pre>
<h2>Cambiar el estilo de un elemento</h2>
<pre><code class="language-js">let nodoPrincipal =  document.querySelector( &quot;#principal&quot; );
nodoPrincipal.style.color = &quot;red&quot;;
</code></pre>
<h2>Pintar en un elemento Web (del DOM)</h2>
<h3>innerHTML</h3>
<p>NOTA: El contenido que introduzca TIENE QUE ESTAR COMPLETO. Es decir, que no puedo introducir una etiqueta de inicio SIN CIERRE</p>
<pre><code class="language-html">&lt;div id=&quot;datos&quot; &gt;&lt;/div&gt;
</code></pre>
<p>En este punto estoy asignando el nuevo valor PERO NO TENGO EN CUENTA LO QUE HABÍA ANTES</p>
<pre><code class="language-js"> let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = '&lt;p&gt; Hola contenido creado por JS &lt;/p&gt;';
</code></pre>
<pre><code class="language-js"> let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = nodoDatos.innerHTML + '&lt;p&gt; Hola contenido creado por JS &lt;/p&gt;';
</code></pre>
<p>RECOMENDACIÓN</p>
<p>Usar una variable STRING que represente el contenido HTML antes de introducirlo en innerHTML</p>
<pre><code class="language-js">
let strHTML = &quot;&lt;h1&gt;HolaMundo&lt;/h1&gt;&quot;;

nodoDatos.innerHTML = strHTML

</code></pre>
<p>NOTA: TEMPLATE STRING</p>
<p>Es el caracter ` y me permite crear STRINGs literales.Por ejemplo dar espacios y ENTER . Se usa el ${ } para escribir el valor de una variable de JS</p>
<pre><code class="language-js">let nombre = 'Curso de JS';
nodoDatos.innerHTML = ` 
    &lt;div class=&quot;card&quot;&gt;
        &lt;h3&gt; ${ nombre }  &lt;/h3&gt;
        &lt;div&gt;
            &lt;p class=&quot;parrafo&quot;&gt; Texto &lt;/p&gt;
            &lt;p class=&quot;parrafo&quot;&gt; Texto &lt;/p&gt;
            &lt;p class=&quot;parrafo&quot;&gt; Texto &lt;/p&gt;
            &lt;p class=&quot;parrafo&quot;&gt; Texto &lt;/p&gt;
            &lt;p class=&quot;parrafo&quot;&gt; Texto &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt; `;

</code></pre>
<pre><code class="language-js">
let lista_nombres = [ 'Ana' ,'Carlos','Pepe', 'María' ,'Alba' ];
let lista_emojis = [ '😅' ,'🤣','😊', '😇' ,'🥰' ];

// Pintar en #nombres todos los elemenos de la lista nombres

let nodoNombres = document.querySelector( '#nombres' );

console.log( nodoNombres );
let strHTML = &quot;&quot;;

for( let i = 0; i &lt; lista_nombres.length ; i++ ){
    console.log( lista_nombres[ i ] );
    //OPCION 1
    // strHTML = strHTML + '&lt;div class=&quot;border&quot; &gt;'+ lista_nombres[i] +'&lt;span&gt;'+ lista_emojis[i] +'&lt;/span&gt; &lt;/div&gt;';
    // OPCIÓN 2: Template String
    strHTML = strHTML + `
        &lt;div class='border'&gt; 
            ${lista_nombres[i]}
            &lt;span&gt;  ${ lista_emojis[i] } &lt;/span&gt;
        &lt;/div&gt;
    `
}
</code></pre>
<h2>Acceder al valor de un input</h2>
<pre><code class="language-html">&lt;input id=&quot;entradaNombre&quot;&gt;
</code></pre>
<pre><code class="language-js">let nodoInput = document.querySelector( '#entradaNombre' );
let nombre = nodoInput.value;
</code></pre>
<h2>Funciones</h2>
<p>Un trozo de código que tiene un nombre. Se puede ejecutar en cualquier momento que se requiera.</p>
<p>Los cometidos de las funciones son:</p>
<ul>
<li>Reusar código</li>
<li>Crear código general</li>
<li>Aislar la funcionalidad</li>
</ul>
<p>El return es una palabra reservada que transforma la ejeución de la función en la variable del return</p>
<pre><code class="language-js">
function saluda ( nombre, sexo ){
    let edad = 90;
    // texto es una VARIABLE LOCAL
    let texto = &quot;¡Hola&quot;;

    if( sexo === 'M' ){ // Mujer
        texto = texto + ' amiga ';
    }else if(sexo === 'H' ){ // Hombre
        texto = texto + ' amigo ';
    }

    texto = texto +  nombre +&quot;!&quot;;

    return texto;
}

let saludoMarta = saluda( 'Marta' , 'M' );

</code></pre>
<h2>Búcle FOR</h2>
<p>Un trozo de código QUE SE REPITE UN NÚMERO DE VECES DETERMINADO</p>
<pre><code class="language-js">// FOR -&gt; Búcles
// inicialización; condición ; actualización
for( let i = 0;       i &lt; 10;        i++  ){// i = i + 1

    console.log( 'Hola Mundo FOR' );
    console.log( i );

}// ACTUALIZACIÓN -&gt; i++


for ( let i=0; i&lt;100; i++ ){

    console.log( i )    

}


let listafrutas = [ 'Pera', 'Manzana', 'Fresa' , 'Melocotón', 'Tomate'  ];
// PODEMOS USAR LA HERRAMIENTA DEL FOR PARA RECORRER EL ARRAY

for( let i = 0; i &lt; listafrutas.length ; i++ ){

    console.log( i )
    // console.log( listafrutas[ 0 ] )
    console.log( listafrutas[ i ] )
}

console.log( listafrutas )



</code></pre>









hola qué tal cómo estáis bien
continuamos avanzando en nuestro curso
de javascript autorizado en el vídeo
anterior comenzamos a ver los
condicionales concretamente el
condicional y si recordáis y vimos un
ejemplo muy sencillo para ver su
sintaxis y funcionamiento vamos a ver en
este vídeo
qué son los if anidados porque nos
veremos en ocasiones en la necesidad de
utilizar y sunny dados es decir un
dentro de otro if y que incluso podría
ir dentro de un tercer hijo esto de los
condicionales anidados es parecido a las
muñecas rusas de madera no estas muñecas
rusas que se abren por la mitad y dentro
sale una muñeca más pequeña que también
se abre por la mitad y dentro tiene otra
más pequeña no pues esto sería lo mismo
en programación vamos a ver también cómo
trabajar con operadores lógicos a la
hora de construir un condicional los
operadores lógicos por ejemplo andy y
porque son los más utilizados y vamos a
ver también una ventana que puede ser
socorrida en determinadas circunstancias
y que me viene muy bien en los inicios
de un curso de javascript para explicar
ciertas cosas me refiero a la ventana de
prontamente
es una ventana emergente que permite que
el usuario introduzca información en su
interior es una ventana que se utiliza
para preguntarle cosas al usuario que
está ejecutando nuestra aplicación en un
navegador por ejemplo así que vamos a
ello
bueno para explicar todas estas cosas y
alguna más voy a seguir trabajando en el
ejemplo del vídeo anterior si recordáis
uso condicional if y aquí habíamos
construido un condicional it que
evaluaba una condición si se cumple
ejecutará las líneas del interior y si
no se cumple ejecutaba el elche que le
ocurre a nuestro el pse nuestro else
solamente tiene una línea de código en
su interior y por ese motivo se puede en
un programa sencillo prescindir de las
llaves e incluso esa línea de código
construirla
a continuación del el seno pero voy a
complicar el programa un poco más para
que esté el se tenga más de una línea de
código que es lo que quiero que haga mi
programa como lo voy a complicar pues
mirar quiero que tenga el mismo
funcionamiento es decir si el usuario
tiene más de 18 años pues que me diga
esto que soy mayor de edad y que puedo
tener el carnet de conducir pero si no
tiene más de 18 años quiero que me diga
que aún no tengo la edad necesaria para
obtener el carnet y que me diga vuelve
dentro de equis años por ejemplo si el
usuario tiene 15 años por poner un
ejemplo le faltan 3 para alcanzar la
mayoría de edad para
a los 18 pues eso es lo que quiero que
me diga en caso de que entre en el el
seno de que no cumpla la condición si
tiene 15 años quiero que me diga aún no
tienes la edad necesaria para tener el
carnet y vuelve dentro de tres años aquí
vamos a tener que utilizar varias cosas
que hemos visto anteriormente en los
comienzos de este curso que son los
operadores aritméticos vamos a tener que
hacer una operación matemática vamos a
tener que restar 18 menos la edad del
individuo para saber cuántos años le
quedan para llegar a la mayoría de edad
bueno como haríamos eso en primer lugar
como el el se va a tener ahora más de
una línea de código pues lo primero que
tenemos que hacer es que esté el se abra
una llave y que la llave del elche se
cierre un poco más adelante por ejemplo
aquí
y a partir de este punto para conseguir
el objetivo que os acabo de mencionar
pues tenemos varias alternativas y mirar
para aquellos que comencéis yo siempre
les digo a los alumnos que comienzan que
en programación siempre hay varios
caminos que te llevan a roma muchas
veces el alumno principiante que se está
iniciando en el mundo de la programación
con un curso en concreto tiende a pensar
que el código que el profesor en este
caso yo escribo en pantalla es la única
alternativa posible para que el programa
funcione y eso no es así
un programa puede funcionar con muchos
códigos diferentes siempre que el código
esté bien escrito es decir no tenga
errores de sintaxis y
y tenga un sentido lógico una cosa es un
error de sintaxis que escribes una
palabra mal y otra cosa es que tengas un
error lógico está todo bien escrito pero
el programa no tiene sentido entonces
para que un programa funcione tiene que
cumplir las dos cosas y eso se puede
conseguir muchas veces con códigos
diferentes lo único que ocurre es que
cuando un programa tiene varias
soluciones que todos los programas
tienen varias soluciones o alternativas
hay soluciones hay códigos que son más
cortos así que yo les digo a mis alumnos
que en programación todos los caminos te
llevan a roma pero hay caminos más
cortos y mejores pero bueno eso no
impide que un programa funcione de
diferentes formas yo muchas veces en el
curso cuando realice un código es muy
posible que alguno de vosotros encuentre
un código mejor por supuesto que sí es
decir lo que yo escriba no siempre va a
ser la mejor solución posible habrá
algunas veces que no vea una solución
mejor dicho esto que es importante todas
estas cosas que voy mencionando al
comenzar a programar dentro de este el
pse yo lo que haría
para llegar a la conclusión o al
planteamiento que os mencionaba es a
continuación de la línea de aún no
tienes la edad necesaria para tener el
carnet declaró una variable a la cual
voy a llamar por ejemplo edad candidato
y digo que esta variable va a ser igual
a 18 que es la mayoría de edad verdad
menos la edad del usuario donde tengo
almacenada la edad del usuario la edad
del usuario la tengo almacenada en esta
variable así que si yo restó 18 menos la
edad del usuario ese dato se almacenará
ahí en esa variable y ahora una vez que
hemos hecho esto yo podría ya a
continuación y fijaos que todavía estoy
dentro del elche escribir una
instrucción que diga algo así
vuelve
dentro de y aquí entra en juego otro de
los operadores que vimos en vídeos
anteriores es el operador de concatenar
cuando utilizamos el más contexto o
contexto y valores numéricos recordar lo
que vimos eso se convierte todo en un
único texto
el operador concatenar bueno pues aquí
yo le puedo decir vuelve dentro de edad
candidato otra cosa importante es que el
visual estudio code es un excelente
entorno de desarrollo y según vas
creando variables fíjate cómo las va
reconociendo y cuando tú empiezas a
escribir una variable sale un menú estos
menús emergentes se denominan menús
intelligence creo que ya lo mencioné
anteriormente verdad y también os dice
que os acostumbréis y si no os lo dije
porque ya no recuerdo de tantos cursos
que nos recuerdan pero acostumbrados a
utilizar estos menús inteligentes porque
nos van a ahorrar mucho tiempo a la hora
de programar y errores de sintaxis yo
ahora lo que quiero escribir es qué edad
candidato que es la variable que acabo
de crear pues en este menú con la flecha
del teclado me desplazo a dar candidato
y ahora pulsó la tecla tabulador y ya me
escribe
el estudio code esa variable por mí me
ahorra tiempo y errores de sintaxis y
esto lo concatenó a su vez con la
palabra años que consigo con este punto
y coma lo que consigo es que si la
persona es mayor de edad que ejecuta
esto e ignora todo esto que está en el
else eso sí es mayor de edad pero si no
es mayor de edad si esto es falso si no
se cumple lo que va a ignorar es el if y
me va a ejecutar todo esto y me dirá
pues por ejemplo si tiene 15 años aún no
tiene la edad necesaria para obtener el
carnet vuelve dentro de tres años en el
caso de que la edad fuera 15 no el
detalle que nos falta es agregar en esta
primera línea de aún no tiene la edad
necesaria para tener carnet
me imagino que muchos os habréis dado
cuenta ahí falta agregar ahora un salto
de línea porque si no agregamos un salto
de línea esta línea y la siguiente la
devuelve dentro de dos de tres de siete
años las va a escribir juntas así que
aquí dentro de las comillas agregamos un
ver entre corchetes un salto de línea y
con esto pues en principio ya estaría
si guardamos cambios tal y como lo
tenemos claro como la edad es 23 pues
nos dice eres mayor de edad puedes
obtener el carnet y luego la ejecución
del programa continúa con un salto de
línea y acabamos de evaluar la edad del
candidato es justo lo que está haciendo
como podéis verlo pero qué ocurre si
cambiamos la edad de 23 a 15 y guardamos
cambios bueno pues en ese caso no
ejecuta el id es decir no imprime es
mayor de edad puedes obtener el carnet
porque no se cumple la condición pero sí
que ejecuta todo lo que tenemos dentro
del elche y mirar como el programa
funciona nos dice aún no tienes la edad
necesaria para obtener el carnet hace un
salto de línea después esto no sale en
el navegador lógicamente pero el
programa no tiene en cuenta crea una
variable en la que almacena 18 - la edad
18 menos 15 que es la edad que hay ahora
es 3 y utiliza ese dato que se almacena
en edad candidato
en edad candidato utiliza el dato para
escribir el mensaje que hay a
continuación aún dentro del elche es
decir vuelve dentro de tres años fijaos
como concatena el texto con el número
entero con el texto nuevamente y por
supuesto una vez que ha terminado de
ejecutar el else el programa estas
líneas las ejecuta siempre hace un salto
de línea otra vez y escribe acabamos de
evaluar la edad del candidato
visto esto vamos a ir un paso más allá
vamos a complicar todavía un poco más el
programa como podéis ver se trata de un
sencillo programa para ver si una
persona puede obtener el carnet de
conducir o no pero vamos a incluir una
variable más dentro de este programa
además de comprobar que la edad sea
mayor o igual que 18 para obtener el
carnet también tenemos que comprobar si
el candidato a obtener el carnet tiene
el dinero suficiente para pagar ese
carnet en los carnet cuestan un dinero
vamos a imaginarnos que el carnet va a
costar por ejemplo 150 euros entonces
tiene que cumplir ya dos condiciones
tiene que ser mayor de 18 años y además
y además tiene que tener pues un ahorro
o un dinero superior a 150 para poder
[Música]
obtener el carnet como lo haríamos os
digo lo mismo de antes hay muchas
alternativas muchos caminos que te
llevan a roma pero yo haría lo siguiente
debajo de la declaración de la variable
edad pues declaró otra variable a la
cual voy a llamar por ejemplo importe
podemos llamar a esta variable como
queramos y voy a decir que esto es igual
por ejemplo bueno pues si vamos a
imaginar que esta persona tiene una edad
para empezar vamos a imaginarnos que
tiene una de 25 y un importe de 200 muy
bien en principio va a cumplir las dos
cosas porque yo quiero que el carnet
cueste 150 como tiene 200 tiene más
dinero de lo que cuesta va a poder
sacarse el carnet ahora bien como evalúo
yo que cumple las dos condiciones aquí
se puede hacer de muchas formas y vamos
a ver que va a haber una que es la
primera que voy a utilizar que no es o
no va a ser del todo apropiada no pero
me viene bien para enseñaros cómo entran
en juego los operadores lógicos que
vimos en su día recordar el operador
anti el operador
si yo quiero que esté condicional evalúe
las dos cosas que la edad es mayor o
igual que 18 y que el importe es mayor o
igual que 150 lo que hay que hacer es
utilizar dentro de la condición del if
el operador lógico y de esta forma doble
ampersand y ahora le diríamos importe
mayor o igual que 150 solamente
ejecutará lo que hay en él y si las dos
condiciones se cumplen como es un
operador lógico y la primera tiene que
ser true y la segunda también tiene que
ser truck para que ejecute lo que hay
dentro del if e ignore lo que hay en el
elche si una de las dos es falsa o las
dos son falls entonces ignorar el if y
ejecutará el elche tal y como lo tengo
ahora está claro que las dos son verdad
225 y 200 así que sí guardo cambios
fíjate como me dice que soy mayor de
edad y que puedo obtener el carnet
ahora bien qué ocurriría si yo digo que
esta persona tiene 200 euros para
pagarse el carnet pero pero no tiene 25
años sino que tiene 17 es decir todavía
no ha alcanzado la mayoría de edad
si yo ejecuto este programa está
condición va a ser falsa y esta
condición va a ser true
pero este operador exige que las dos
sean true y como no es así porque ésta
no lo es no va a ejecutar lo que tengo
en el if y va a ejecutar lo que tengo en
el elche
si yo guardo cambios fíjate cómo
efectivamente es así aún no tienes la
necesaria para tener el carnet vuelve
dentro de un año o un año porque porque
tiene 17 el cálculo sigue siendo
correcto
pero por qué decía llegó hace un
instante que esta solución no va a ser
del todo adecuada pues no va a ser del
todo adecuada porque en el caso de que
tenga 25 años pero pero el importe del
carné
sea por ejemplo de 80 es decir no tiene
dinero para pagar el carnet que está
claro que no puede sacarse el carnet
está estruch ahora mismo esta condición
y esta es force exige que las dos sean
true como no lo es no va a ejecutar este
ir y va a pasar al elche pero aquí vamos
a ver algo extraño porque fíjate si
guardamos cambios efectivamente se vale
el pse pero mira lo que ocurre me dice
que aún no tengo la edad necesaria así
que la tengo por eso decía que no es el
utilizar el operador lógico y en este
caso en concreto en este caso en
concreto no es la solución más adecuada
por este este fallo no es un fallo de
sintaxis pero es un fallo lógico no es
normal que el programa me diga que no
tengo la edad porque la edad sí que la
tengo lo que no tengo es el dinero y
luego además fijaos que hace el cálculo
de la edad y dice que vuelva dentro de
menos siete años no no tiene ningún
sentido
y menos sentido tendría aún si en vez de
introducir la edad directamente en el
programa como estamos haciendo nosotros
utilizamos ventanas emergentes para que
sea el usuario quien introduzca estos
datos como conseguimos esto antes de
mejorar el programa como conseguimos que
sea el usuario que está ejecutando
nuestra aplicación quien introduzca en
una ventana emergente la edad que tiene
y quien introduzca en una ventana
emergente
el importe que tiene para pagar el
carnet bueno pues es aquí donde
utilizamos una función de javascript
perteneciente al objeto windows pero
esto de momento no me interesa que
sepáis lo que es el nombre de la función
si la función se llama prompt esta
función la sintaxis es palabra reservada
prom abrimos paréntesis aquí un mensaje
el que queramos que vea el usuario un
mensaje
se cierran las comillas se cierra el
paréntesis punto y coma
esta sería la sintaxis cómo utilizar
esta función para que podamos introducir
en la ventana emergente la edad bueno
pues sustituimos cuando declaramos la
variable edad por la función pronto y
decimos que la edad va a ser igual a
froome
abrimos paréntesis comillas introduces
tu edad por favor por ejemplo así y
hacemos lo propio también con el importe
ya que estamos no vamos a decir que el
importe es igual a otro prompt
de introduce que podemos poner aquí
introduce tus ahorros por ejemplo para
ver si tiene dinero o no para pagarse el
carnet algo así como va a funcionar este
programa en cuanto guarde cambios
recordad que el flujo se ejecuta de
arriba abajo lo primero que se va a
encontrar es esta línea aquí sale una
ventana emergente estas ventanas
emergentes de tipo prom tienen una
característica y la característica es
que son ventanas modales qué quiere
decir esto qué quiere decir que una
ventana es modal quiere decir que la
ventana emergente se abre en primer
plano sobre lo que pueda haber detrás
que en este caso sería la ventana del
navegador y no hay forma de ponerla
detrás no hay forma de minimizar la y
que se ponga detrás del navegador ni
nada por el estilo y otro comportamiento
y éste es más importante todavía que
tiene una ventana de prom es que el
flujo de ejecución se detiene en esta
ventana hasta que no hacemos algo con
ella hasta que no introducimos una edad
y le damos al botón de aceptar como
veréis no es decir el flujo de ejecución
se queda detenido ahí cuando nosotros
introducimos la edad y pulsamos el botón
de aceptar el flujo de ejecución
hacia abajo lo que pasa es que en este
programa en concreto se va a encontrar
con otra que va a pasar lo mismo va a
salir la ventana emergente pidiéndonos
los ahorros y el flujo de ejecución se
va a detener ahí y yo puedo estar con la
ventana aquí quieta sin introducir nada
tres días y medio con el ordenador
encendido que el flujo de ejecución se
queda detenido aquí y esto que hay aquí
no lo va a hacer hasta que no hagamos
algo con esta ventana esa es la
característica que tiene una ventana
modal bueno pues vamos a ver cómo
funciona esto vamos a guardar cambios
y fijaos como el programa me deja fatal
y no hace nada porque no hace nada pues
porque estoy viendo que tengo aquí un
error de sintaxis que seguramente hayáis
visto vosotros yo escribo muy mal por
desgracia la palabra correcta es brawn
terminado en pt no en tp como tengo aquí
así que brawn ahora si debería de salir
en el menú inteligente debería de
haberme dado cuenta guardó cambios y
ahora sí fijaos esto es una ventana de
pronto esto es una ventana modal el
flujo de ejecución se encuentra detenido
en esta línea hasta que yo no haga algo
con esta ventana no introduzca la edad
el flujo de ejecución no continuará
hacia abajo pues yo voy a introducir
aquí una edad el valor que yo introduzca
en este cuadro de texto fíjate dónde
está el mensaje de introduce dudas por
favor el número que sea 30 2015 ese
número se va a almacenar en la variable
edad lo que el usuario introduzca en
esta ventana se almacenará en la
variable edad porque así lo tenemos
programado en nuestro código así que
aquí vamos a ponerle por ejemplo 35 y
pulsamos en aceptar
y ahora me sale la siguiente ahora el
programa se encuentra detenido en esta
línea de código no está a la espera de
que introduzca los ahorros que tengo
vamos a decirle que tengo 350 cuando yo
pulse en aceptar aquí se almacenó 35 no
me acuerdo la gas que puse que aquí el
importe se almacena 350 el caso es que
esto es true y esto también así que va a
ejecutar esto y va a prescindir de esto
entonces si yo pulso en aceptar fíjate
como el programa funciona me dice que
soy mayor de edad que puedo obtener el
carnet y bueno pues ya hemos acabado de
evaluar la edad del candidato no pero
claro estas ventanas provienen muy bien
pero tal y como tengo el programa pues
fijaos lo que ocurre si vuelvo a
ejecutarlo nuevamente control s yo aquí
le digo que tengo 15 años es decir aquí
escribo 15 si yo pulso en aceptar me
dice ahora que introduzca mis ahorros
esto tampoco tiene mucho sentido si ya
te he dicho que soy menor de edad para
que me pregunta si tengo dinero para
pagar el carnet no
es decir esta ventana de introducir tus
ahorros debería de salir solo y solo si
la edad es mayor o igual que 18 si somos
mayores de edad porque si tenemos 15
años aunque yo le diga aquí que tengo un
millón de euros o más pues me dice que
aún no tengo la edad necesaria para
obtener el carnet y que vuelva dentro de
tres años
entonces como podéis ver el
planteamiento que hice hace un instante
utilizando el operador lógico aquí no es
del todo adecuado para este programa en
concreto
por los dos motivos porque si utilizamos
ventanas de pronto no tiene sentido que
me saque la segunda y porque sí
le digo que tengo 15 años me va a decir
que no tenga que no tengo la edad
necesaria no perdón si le digo que tengo
una edad adecuada pero no tengo importe
vamos a hacerlo para que lo veáis mirar
si yo ejecuto el programa y ahora le
digo introduce tu edad pues mira tengo
50 años y ahora me dice introduce tus
ahorros pues tengo 20 euros está claro
que no puedo sacarme el carnet el
problema viene aquí viene que me dice
que no tengo la edad necesaria cuando
tengo 50 años y que vuelva dentro de -32
no tenemos esos dos problemas como
solucionarlos es aquí donde uno pues va
adquiriendo mente de programador
mirar y esto es un mensaje que lanzó a
los que están comenzando a programar que
muchas veces se desesperan en estas
situaciones
saber programar aprender a programar no
implica solo que no cometas errores de
sintaxis y que conozcas las
instrucciones del lenguaje el programar
en cualquier lenguaje implica que tienes
que pensar si a ti por el motivo que sea
no te gusta resolver problemas no te
gusta pensar no te gusta muchas veces
estar media hora localizando un fallo es
lógico que no ves si no te gusta nada de
eso la programación va a ser difícil que
encaje en tu vida aquí lo que tenemos
que hacer en este caso es pensar y esto
ya depende solamente de nuestro
intelecto no depende de que sepas más o
menos javascript tenemos que pensar
qué solución le podemos dar a este
programa para que funcione bien y ya os
anticipo que la solución pasa por meter
esta instrucción es decir cuando nos
pregunta los ahorros dentro de la jtf y
quedaría muy bien por ejemplo
entre los dos documentos right
y ahora una vez que hemos hecho esto a
continuación de haber metido esa ventana
de pronto y la declaración de la
variable importe dentro del if por
supuesto tenemos que quitar esta
condición que ya no nos sirve
simplemente evaluar si es mayor o igual
que 18 bien pues a continuación de la
segunda ventana de prom yo aquí
incluiría un id pero fíjate que steve
está dentro de la anterior es un ife
anidado univ dentro de otro if y aquí
que le voy a preguntar le voy a
preguntar si el importe que el usuario
ha introducido justo antes en la ventana
de prom es mayor o igual que 150 en ese
caso que me diga document.no wright
puedes obtener el carné
es decir esta instrucción que teníamos
aquí para que la voy a escribir otra vez
si la tenemos justo debajo lo que voy a
hacer va a ser trasladarla a
continuación de steve y si no fíjate que
este els este el que estoy construyendo
pertenece al leaf que tiene justo arriba
no pertenece al padre pertenece al hijo
si no es mayor o igual que 150 vamos a
poner documento punto right
por ejemplo el importe no es suficiente
el importe no es suficiente
no tienes carnet o lo que quieras
ponerlo
para desmoralizar un poco no tienes
carnet y coma
fíjate que tanto en este como en este
else prescindido de las llaves las podía
haber puesto pero como son unique y els
que van dentro de otro if y además cada
uno de ellos tiene una única línea y
además el programa todavía no es muy
complejo aunque lo que los que estáis
empezando no os lo creáis pues he
decidido prescindir de las llaves pero
si las ponéis funciona exactamente igual
y si no me equivocado en nada este
programa ahora sí que funciona ahora
bien aquellos que estéis comenzando a
programar seguramente le vais a tener
que meter una buena pensada a todo este
código recordar siempre que el flujo va
de arriba abajo entonces aquí lo primero
que va a hacer el programa es
preguntarme la edad y si la edad es
menor que 18 si la edad por ejemplo
imaginaos que es 15
pues nos quitamos muchos problemas
porque esto no se cumple como no se
cumple nada de esto se va a ejecutar es
decir no me va a preguntar cuáles son
mis ahorros no tiene sentido porque no
tengo 15 años para que me vas a
preguntar los ahorros entonces el
programa ignora todo esto y directamente
se le vales y me dice que no tengo la
edad me dice que vuelva dentro de equis
años etcétera no ahora bien si la edad
es mayor o igual que 18 entonces va a
hacer todo esto y va a ignorar por
completo el else y qué va a hacer en
primer lugar esto casi no lo voy a ver
no pero antes de que salga la ventana
emergente de los ahorros lo que va a
hacer va a ser escribir en pantalla que
soy mayor de edad después saldrá la
ventana emergente preguntándome los
ahorros y es aquí donde si le digo que
tengo más de 150 euros me ha decir que
tengo el carnet claro si estoy aquí es
porque tengo más de 18 años y si estoy
aquí también es porque tengo más de 150
euros y si no tengo más de 50 euros
ignorará steve y entrará en el el set
bien ejemplo de its anidados ejemplo
para utilizar ventanas de tipo pero no
vamos a guardar cambios que no prueba el
programa guardamos cambios vamos a poner
una edad bueno inferior a 18 para
empezar tengo 14 años vamos a ponerlo
aquí 14 aceptamos pues mirad aún no
tengo la edad necesaria para tener el
carnet vuelve dentro de cuatro años
parece que funciona no vamos a volver a
ejecutar el programa ahora le digo que
tengo 29
aquí 29 aceptamos y fíjate como ahora ha
entrado aquí el programa se encuentra
detenido en esta línea y me está
preguntando por los ahorros si yo ahora
le digo que tengo 220 euros para decir
que puedo obtener el carnet es decir va
a ejecutar esta línea
está la va a ignorar porque es él el pse
entonces y se cumple esto ignora leerse
esto ya lo ignoro antes cuando entramos
aquí y continuará la ejecución haciendo
un salto de línea y diciéndome que acabo
de evaluar la edad del candidato eres
mayor de edad puedes obtener el carnet
acabamos de evaluar la edad del
candidato y el último caso que nos toca
comprobar es si tengo 29 otra vez es muy
fácil escribir en estas ventanas el dato
en el programa no hay que hacer clic
antes 29 vamos a decirle ahora que tengo
por ejemplo veinte euros y ahora lo que
hará será ignorar este mensaje porque
estoy aquí y la edad perdón el importe
no se cumple y sí que va a ejecutar esto
es decir va a imprimir el importe en el
suficiente no tienes carnet luego hará
el salto de línea e imprimirá acabamos
de evaluar la edad e candidato
y efectivamente así es bueno pues visto
seguramente insisto tendréis que meterle
una pensada a este programa en breve os
empezaré a plantear los primeros
ejercicios para practicar con los
condicionales nada más vamos a dejar
este vídeo en el punto en el que nos
encontramos continuaremos avanzando en
breve hasta la próxima
