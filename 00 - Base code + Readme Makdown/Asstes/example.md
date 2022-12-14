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
<h3>Seleccionar un s??lo elemento</h3>
<p>Query selector devuelve SIEMPRE un s??lo elemento HTML; el primero que cumple el selector</p>
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
<h2>A??adir Clases</h2>
<p>Para a??adir una clase necesito seleccionar primero el elemento del documento HTML ( DOM )</p>
<pre><code class="language-html">&lt;div id=&quot;miCuadrado&quot;&gt;&lt;/div&gt;
</code></pre>
<pre><code class="language-js">let nodoMiCuadrado = document.querySelector('#miCuadrado');
// A??adir al elemento una clase
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
<p>En este punto estoy asignando el nuevo valor PERO NO TENGO EN CUENTA LO QUE HAB??A ANTES</p>
<pre><code class="language-js"> let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = '&lt;p&gt; Hola contenido creado por JS &lt;/p&gt;';
</code></pre>
<pre><code class="language-js"> let nodoDatos = document.querySelector( '#datos' );
nodoDatos.innerHTML = nodoDatos.innerHTML + '&lt;p&gt; Hola contenido creado por JS &lt;/p&gt;';
</code></pre>
<p>RECOMENDACI??N</p>
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
let lista_nombres = [ 'Ana' ,'Carlos','Pepe', 'Mar??a' ,'Alba' ];
let lista_emojis = [ '????' ,'????','????', '????' ,'????' ];

// Pintar en #nombres todos los elemenos de la lista nombres

let nodoNombres = document.querySelector( '#nombres' );

console.log( nodoNombres );
let strHTML = &quot;&quot;;

for( let i = 0; i &lt; lista_nombres.length ; i++ ){
    console.log( lista_nombres[ i ] );
    //OPCION 1
    // strHTML = strHTML + '&lt;div class=&quot;border&quot; &gt;'+ lista_nombres[i] +'&lt;span&gt;'+ lista_emojis[i] +'&lt;/span&gt; &lt;/div&gt;';
    // OPCI??N 2: Template String
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
<p>Un trozo de c??digo que tiene un nombre. Se puede ejecutar en cualquier momento que se requiera.</p>
<p>Los cometidos de las funciones son:</p>
<ul>
<li>Reusar c??digo</li>
<li>Crear c??digo general</li>
<li>Aislar la funcionalidad</li>
</ul>
<p>El return es una palabra reservada que transforma la ejeuci??n de la funci??n en la variable del return</p>
<pre><code class="language-js">
function saluda ( nombre, sexo ){
    let edad = 90;
    // texto es una VARIABLE LOCAL
    let texto = &quot;??Hola&quot;;

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
<h2>B??cle FOR</h2>
<p>Un trozo de c??digo QUE SE REPITE UN N??MERO DE VECES DETERMINADO</p>
<pre><code class="language-js">// FOR -&gt; B??cles
// inicializaci??n; condici??n ; actualizaci??n
for( let i = 0;       i &lt; 10;        i++  ){// i = i + 1

    console.log( 'Hola Mundo FOR' );
    console.log( i );

}// ACTUALIZACI??N -&gt; i++


for ( let i=0; i&lt;100; i++ ){

    console.log( i )    

}


let listafrutas = [ 'Pera', 'Manzana', 'Fresa' , 'Melocot??n', 'Tomate'  ];
// PODEMOS USAR LA HERRAMIENTA DEL FOR PARA RECORRER EL ARRAY

for( let i = 0; i &lt; listafrutas.length ; i++ ){

    console.log( i )
    // console.log( listafrutas[ 0 ] )
    console.log( listafrutas[ i ] )
}

console.log( listafrutas )



</code></pre>









hola qu?? tal c??mo est??is bien
continuamos avanzando en nuestro curso
de javascript autorizado en el v??deo
anterior comenzamos a ver los
condicionales concretamente el
condicional y si record??is y vimos un
ejemplo muy sencillo para ver su
sintaxis y funcionamiento vamos a ver en
este v??deo
qu?? son los if anidados porque nos
veremos en ocasiones en la necesidad de
utilizar y sunny dados es decir un
dentro de otro if y que incluso podr??a
ir dentro de un tercer hijo esto de los
condicionales anidados es parecido a las
mu??ecas rusas de madera no estas mu??ecas
rusas que se abren por la mitad y dentro
sale una mu??eca m??s peque??a que tambi??n
se abre por la mitad y dentro tiene otra
m??s peque??a no pues esto ser??a lo mismo
en programaci??n vamos a ver tambi??n c??mo
trabajar con operadores l??gicos a la
hora de construir un condicional los
operadores l??gicos por ejemplo andy y
porque son los m??s utilizados y vamos a
ver tambi??n una ventana que puede ser
socorrida en determinadas circunstancias
y que me viene muy bien en los inicios
de un curso de javascript para explicar
ciertas cosas me refiero a la ventana de
prontamente
es una ventana emergente que permite que
el usuario introduzca informaci??n en su
interior es una ventana que se utiliza
para preguntarle cosas al usuario que
est?? ejecutando nuestra aplicaci??n en un
navegador por ejemplo as?? que vamos a
ello
bueno para explicar todas estas cosas y
alguna m??s voy a seguir trabajando en el
ejemplo del v??deo anterior si record??is
uso condicional if y aqu?? hab??amos
construido un condicional it que
evaluaba una condici??n si se cumple
ejecutar?? las l??neas del interior y si
no se cumple ejecutaba el elche que le
ocurre a nuestro el pse nuestro else
solamente tiene una l??nea de c??digo en
su interior y por ese motivo se puede en
un programa sencillo prescindir de las
llaves e incluso esa l??nea de c??digo
construirla
a continuaci??n del el seno pero voy a
complicar el programa un poco m??s para
que est?? el se tenga m??s de una l??nea de
c??digo que es lo que quiero que haga mi
programa como lo voy a complicar pues
mirar quiero que tenga el mismo
funcionamiento es decir si el usuario
tiene m??s de 18 a??os pues que me diga
esto que soy mayor de edad y que puedo
tener el carnet de conducir pero si no
tiene m??s de 18 a??os quiero que me diga
que a??n no tengo la edad necesaria para
obtener el carnet y que me diga vuelve
dentro de equis a??os por ejemplo si el
usuario tiene 15 a??os por poner un
ejemplo le faltan 3 para alcanzar la
mayor??a de edad para
a los 18 pues eso es lo que quiero que
me diga en caso de que entre en el el
seno de que no cumpla la condici??n si
tiene 15 a??os quiero que me diga a??n no
tienes la edad necesaria para tener el
carnet y vuelve dentro de tres a??os aqu??
vamos a tener que utilizar varias cosas
que hemos visto anteriormente en los
comienzos de este curso que son los
operadores aritm??ticos vamos a tener que
hacer una operaci??n matem??tica vamos a
tener que restar 18 menos la edad del
individuo para saber cu??ntos a??os le
quedan para llegar a la mayor??a de edad
bueno como har??amos eso en primer lugar
como el el se va a tener ahora m??s de
una l??nea de c??digo pues lo primero que
tenemos que hacer es que est?? el se abra
una llave y que la llave del elche se
cierre un poco m??s adelante por ejemplo
aqu??
y a partir de este punto para conseguir
el objetivo que os acabo de mencionar
pues tenemos varias alternativas y mirar
para aquellos que comenc??is yo siempre
les digo a los alumnos que comienzan que
en programaci??n siempre hay varios
caminos que te llevan a roma muchas
veces el alumno principiante que se est??
iniciando en el mundo de la programaci??n
con un curso en concreto tiende a pensar
que el c??digo que el profesor en este
caso yo escribo en pantalla es la ??nica
alternativa posible para que el programa
funcione y eso no es as??
un programa puede funcionar con muchos
c??digos diferentes siempre que el c??digo
est?? bien escrito es decir no tenga
errores de sintaxis y
y tenga un sentido l??gico una cosa es un
error de sintaxis que escribes una
palabra mal y otra cosa es que tengas un
error l??gico est?? todo bien escrito pero
el programa no tiene sentido entonces
para que un programa funcione tiene que
cumplir las dos cosas y eso se puede
conseguir muchas veces con c??digos
diferentes lo ??nico que ocurre es que
cuando un programa tiene varias
soluciones que todos los programas
tienen varias soluciones o alternativas
hay soluciones hay c??digos que son m??s
cortos as?? que yo les digo a mis alumnos
que en programaci??n todos los caminos te
llevan a roma pero hay caminos m??s
cortos y mejores pero bueno eso no
impide que un programa funcione de
diferentes formas yo muchas veces en el
curso cuando realice un c??digo es muy
posible que alguno de vosotros encuentre
un c??digo mejor por supuesto que s?? es
decir lo que yo escriba no siempre va a
ser la mejor soluci??n posible habr??
algunas veces que no vea una soluci??n
mejor dicho esto que es importante todas
estas cosas que voy mencionando al
comenzar a programar dentro de este el
pse yo lo que har??a
para llegar a la conclusi??n o al
planteamiento que os mencionaba es a
continuaci??n de la l??nea de a??n no
tienes la edad necesaria para tener el
carnet declar?? una variable a la cual
voy a llamar por ejemplo edad candidato
y digo que esta variable va a ser igual
a 18 que es la mayor??a de edad verdad
menos la edad del usuario donde tengo
almacenada la edad del usuario la edad
del usuario la tengo almacenada en esta
variable as?? que si yo rest?? 18 menos la
edad del usuario ese dato se almacenar??
ah?? en esa variable y ahora una vez que
hemos hecho esto yo podr??a ya a
continuaci??n y fijaos que todav??a estoy
dentro del elche escribir una
instrucci??n que diga algo as??
vuelve
dentro de y aqu?? entra en juego otro de
los operadores que vimos en v??deos
anteriores es el operador de concatenar
cuando utilizamos el m??s contexto o
contexto y valores num??ricos recordar lo
que vimos eso se convierte todo en un
??nico texto
el operador concatenar bueno pues aqu??
yo le puedo decir vuelve dentro de edad
candidato otra cosa importante es que el
visual estudio code es un excelente
entorno de desarrollo y seg??n vas
creando variables f??jate c??mo las va
reconociendo y cuando t?? empiezas a
escribir una variable sale un men?? estos
men??s emergentes se denominan men??s
intelligence creo que ya lo mencion??
anteriormente verdad y tambi??n os dice
que os acostumbr??is y si no os lo dije
porque ya no recuerdo de tantos cursos
que nos recuerdan pero acostumbrados a
utilizar estos men??s inteligentes porque
nos van a ahorrar mucho tiempo a la hora
de programar y errores de sintaxis yo
ahora lo que quiero escribir es qu?? edad
candidato que es la variable que acabo
de crear pues en este men?? con la flecha
del teclado me desplazo a dar candidato
y ahora puls?? la tecla tabulador y ya me
escribe
el estudio code esa variable por m?? me
ahorra tiempo y errores de sintaxis y
esto lo concaten?? a su vez con la
palabra a??os que consigo con este punto
y coma lo que consigo es que si la
persona es mayor de edad que ejecuta
esto e ignora todo esto que est?? en el
else eso s?? es mayor de edad pero si no
es mayor de edad si esto es falso si no
se cumple lo que va a ignorar es el if y
me va a ejecutar todo esto y me dir??
pues por ejemplo si tiene 15 a??os a??n no
tiene la edad necesaria para obtener el
carnet vuelve dentro de tres a??os en el
caso de que la edad fuera 15 no el
detalle que nos falta es agregar en esta
primera l??nea de a??n no tiene la edad
necesaria para tener carnet
me imagino que muchos os habr??is dado
cuenta ah?? falta agregar ahora un salto
de l??nea porque si no agregamos un salto
de l??nea esta l??nea y la siguiente la
devuelve dentro de dos de tres de siete
a??os las va a escribir juntas as?? que
aqu?? dentro de las comillas agregamos un
ver entre corchetes un salto de l??nea y
con esto pues en principio ya estar??a
si guardamos cambios tal y como lo
tenemos claro como la edad es 23 pues
nos dice eres mayor de edad puedes
obtener el carnet y luego la ejecuci??n
del programa contin??a con un salto de
l??nea y acabamos de evaluar la edad del
candidato es justo lo que est?? haciendo
como pod??is verlo pero qu?? ocurre si
cambiamos la edad de 23 a 15 y guardamos
cambios bueno pues en ese caso no
ejecuta el id es decir no imprime es
mayor de edad puedes obtener el carnet
porque no se cumple la condici??n pero s??
que ejecuta todo lo que tenemos dentro
del elche y mirar como el programa
funciona nos dice a??n no tienes la edad
necesaria para obtener el carnet hace un
salto de l??nea despu??s esto no sale en
el navegador l??gicamente pero el
programa no tiene en cuenta crea una
variable en la que almacena 18 - la edad
18 menos 15 que es la edad que hay ahora
es 3 y utiliza ese dato que se almacena
en edad candidato
en edad candidato utiliza el dato para
escribir el mensaje que hay a
continuaci??n a??n dentro del elche es
decir vuelve dentro de tres a??os fijaos
como concatena el texto con el n??mero
entero con el texto nuevamente y por
supuesto una vez que ha terminado de
ejecutar el else el programa estas
l??neas las ejecuta siempre hace un salto
de l??nea otra vez y escribe acabamos de
evaluar la edad del candidato
visto esto vamos a ir un paso m??s all??
vamos a complicar todav??a un poco m??s el
programa como pod??is ver se trata de un
sencillo programa para ver si una
persona puede obtener el carnet de
conducir o no pero vamos a incluir una
variable m??s dentro de este programa
adem??s de comprobar que la edad sea
mayor o igual que 18 para obtener el
carnet tambi??n tenemos que comprobar si
el candidato a obtener el carnet tiene
el dinero suficiente para pagar ese
carnet en los carnet cuestan un dinero
vamos a imaginarnos que el carnet va a
costar por ejemplo 150 euros entonces
tiene que cumplir ya dos condiciones
tiene que ser mayor de 18 a??os y adem??s
y adem??s tiene que tener pues un ahorro
o un dinero superior a 150 para poder
[M??sica]
obtener el carnet como lo har??amos os
digo lo mismo de antes hay muchas
alternativas muchos caminos que te
llevan a roma pero yo har??a lo siguiente
debajo de la declaraci??n de la variable
edad pues declar?? otra variable a la
cual voy a llamar por ejemplo importe
podemos llamar a esta variable como
queramos y voy a decir que esto es igual
por ejemplo bueno pues si vamos a
imaginar que esta persona tiene una edad
para empezar vamos a imaginarnos que
tiene una de 25 y un importe de 200 muy
bien en principio va a cumplir las dos
cosas porque yo quiero que el carnet
cueste 150 como tiene 200 tiene m??s
dinero de lo que cuesta va a poder
sacarse el carnet ahora bien como eval??o
yo que cumple las dos condiciones aqu??
se puede hacer de muchas formas y vamos
a ver que va a haber una que es la
primera que voy a utilizar que no es o
no va a ser del todo apropiada no pero
me viene bien para ense??aros c??mo entran
en juego los operadores l??gicos que
vimos en su d??a recordar el operador
anti el operador
si yo quiero que est?? condicional eval??e
las dos cosas que la edad es mayor o
igual que 18 y que el importe es mayor o
igual que 150 lo que hay que hacer es
utilizar dentro de la condici??n del if
el operador l??gico y de esta forma doble
ampersand y ahora le dir??amos importe
mayor o igual que 150 solamente
ejecutar?? lo que hay en ??l y si las dos
condiciones se cumplen como es un
operador l??gico y la primera tiene que
ser true y la segunda tambi??n tiene que
ser truck para que ejecute lo que hay
dentro del if e ignore lo que hay en el
elche si una de las dos es falsa o las
dos son falls entonces ignorar el if y
ejecutar?? el elche tal y como lo tengo
ahora est?? claro que las dos son verdad
225 y 200 as?? que s?? guardo cambios
f??jate como me dice que soy mayor de
edad y que puedo obtener el carnet
ahora bien qu?? ocurrir??a si yo digo que
esta persona tiene 200 euros para
pagarse el carnet pero pero no tiene 25
a??os sino que tiene 17 es decir todav??a
no ha alcanzado la mayor??a de edad
si yo ejecuto este programa est??
condici??n va a ser falsa y esta
condici??n va a ser true
pero este operador exige que las dos
sean true y como no es as?? porque ??sta
no lo es no va a ejecutar lo que tengo
en el if y va a ejecutar lo que tengo en
el elche
si yo guardo cambios f??jate c??mo
efectivamente es as?? a??n no tienes la
necesaria para tener el carnet vuelve
dentro de un a??o o un a??o porque porque
tiene 17 el c??lculo sigue siendo
correcto
pero por qu?? dec??a lleg?? hace un
instante que esta soluci??n no va a ser
del todo adecuada pues no va a ser del
todo adecuada porque en el caso de que
tenga 25 a??os pero pero el importe del
carn??
sea por ejemplo de 80 es decir no tiene
dinero para pagar el carnet que est??
claro que no puede sacarse el carnet
est?? estruch ahora mismo esta condici??n
y esta es force exige que las dos sean
true como no lo es no va a ejecutar este
ir y va a pasar al elche pero aqu?? vamos
a ver algo extra??o porque f??jate si
guardamos cambios efectivamente se vale
el pse pero mira lo que ocurre me dice
que a??n no tengo la edad necesaria as??
que la tengo por eso dec??a que no es el
utilizar el operador l??gico y en este
caso en concreto en este caso en
concreto no es la soluci??n m??s adecuada
por este este fallo no es un fallo de
sintaxis pero es un fallo l??gico no es
normal que el programa me diga que no
tengo la edad porque la edad s?? que la
tengo lo que no tengo es el dinero y
luego adem??s fijaos que hace el c??lculo
de la edad y dice que vuelva dentro de
menos siete a??os no no tiene ning??n
sentido
y menos sentido tendr??a a??n si en vez de
introducir la edad directamente en el
programa como estamos haciendo nosotros
utilizamos ventanas emergentes para que
sea el usuario quien introduzca estos
datos como conseguimos esto antes de
mejorar el programa como conseguimos que
sea el usuario que est?? ejecutando
nuestra aplicaci??n quien introduzca en
una ventana emergente la edad que tiene
y quien introduzca en una ventana
emergente
el importe que tiene para pagar el
carnet bueno pues es aqu?? donde
utilizamos una funci??n de javascript
perteneciente al objeto windows pero
esto de momento no me interesa que
sep??is lo que es el nombre de la funci??n
si la funci??n se llama prompt esta
funci??n la sintaxis es palabra reservada
prom abrimos par??ntesis aqu?? un mensaje
el que queramos que vea el usuario un
mensaje
se cierran las comillas se cierra el
par??ntesis punto y coma
esta ser??a la sintaxis c??mo utilizar
esta funci??n para que podamos introducir
en la ventana emergente la edad bueno
pues sustituimos cuando declaramos la
variable edad por la funci??n pronto y
decimos que la edad va a ser igual a
froome
abrimos par??ntesis comillas introduces
tu edad por favor por ejemplo as?? y
hacemos lo propio tambi??n con el importe
ya que estamos no vamos a decir que el
importe es igual a otro prompt
de introduce que podemos poner aqu??
introduce tus ahorros por ejemplo para
ver si tiene dinero o no para pagarse el
carnet algo as?? como va a funcionar este
programa en cuanto guarde cambios
recordad que el flujo se ejecuta de
arriba abajo lo primero que se va a
encontrar es esta l??nea aqu?? sale una
ventana emergente estas ventanas
emergentes de tipo prom tienen una
caracter??stica y la caracter??stica es
que son ventanas modales qu?? quiere
decir esto qu?? quiere decir que una
ventana es modal quiere decir que la
ventana emergente se abre en primer
plano sobre lo que pueda haber detr??s
que en este caso ser??a la ventana del
navegador y no hay forma de ponerla
detr??s no hay forma de minimizar la y
que se ponga detr??s del navegador ni
nada por el estilo y otro comportamiento
y ??ste es m??s importante todav??a que
tiene una ventana de prom es que el
flujo de ejecuci??n se detiene en esta
ventana hasta que no hacemos algo con
ella hasta que no introducimos una edad
y le damos al bot??n de aceptar como
ver??is no es decir el flujo de ejecuci??n
se queda detenido ah?? cuando nosotros
introducimos la edad y pulsamos el bot??n
de aceptar el flujo de ejecuci??n
hacia abajo lo que pasa es que en este
programa en concreto se va a encontrar
con otra que va a pasar lo mismo va a
salir la ventana emergente pidi??ndonos
los ahorros y el flujo de ejecuci??n se
va a detener ah?? y yo puedo estar con la
ventana aqu?? quieta sin introducir nada
tres d??as y medio con el ordenador
encendido que el flujo de ejecuci??n se
queda detenido aqu?? y esto que hay aqu??
no lo va a hacer hasta que no hagamos
algo con esta ventana esa es la
caracter??stica que tiene una ventana
modal bueno pues vamos a ver c??mo
funciona esto vamos a guardar cambios
y fijaos como el programa me deja fatal
y no hace nada porque no hace nada pues
porque estoy viendo que tengo aqu?? un
error de sintaxis que seguramente hay??is
visto vosotros yo escribo muy mal por
desgracia la palabra correcta es brawn
terminado en pt no en tp como tengo aqu??
as?? que brawn ahora si deber??a de salir
en el men?? inteligente deber??a de
haberme dado cuenta guard?? cambios y
ahora s?? fijaos esto es una ventana de
pronto esto es una ventana modal el
flujo de ejecuci??n se encuentra detenido
en esta l??nea hasta que yo no haga algo
con esta ventana no introduzca la edad
el flujo de ejecuci??n no continuar??
hacia abajo pues yo voy a introducir
aqu?? una edad el valor que yo introduzca
en este cuadro de texto f??jate d??nde
est?? el mensaje de introduce dudas por
favor el n??mero que sea 30 2015 ese
n??mero se va a almacenar en la variable
edad lo que el usuario introduzca en
esta ventana se almacenar?? en la
variable edad porque as?? lo tenemos
programado en nuestro c??digo as?? que
aqu?? vamos a ponerle por ejemplo 35 y
pulsamos en aceptar
y ahora me sale la siguiente ahora el
programa se encuentra detenido en esta
l??nea de c??digo no est?? a la espera de
que introduzca los ahorros que tengo
vamos a decirle que tengo 350 cuando yo
pulse en aceptar aqu?? se almacen?? 35 no
me acuerdo la gas que puse que aqu?? el
importe se almacena 350 el caso es que
esto es true y esto tambi??n as?? que va a
ejecutar esto y va a prescindir de esto
entonces si yo pulso en aceptar f??jate
como el programa funciona me dice que
soy mayor de edad que puedo obtener el
carnet y bueno pues ya hemos acabado de
evaluar la edad del candidato no pero
claro estas ventanas provienen muy bien
pero tal y como tengo el programa pues
fijaos lo que ocurre si vuelvo a
ejecutarlo nuevamente control s yo aqu??
le digo que tengo 15 a??os es decir aqu??
escribo 15 si yo pulso en aceptar me
dice ahora que introduzca mis ahorros
esto tampoco tiene mucho sentido si ya
te he dicho que soy menor de edad para
que me pregunta si tengo dinero para
pagar el carnet no
es decir esta ventana de introducir tus
ahorros deber??a de salir solo y solo si
la edad es mayor o igual que 18 si somos
mayores de edad porque si tenemos 15
a??os aunque yo le diga aqu?? que tengo un
mill??n de euros o m??s pues me dice que
a??n no tengo la edad necesaria para
obtener el carnet y que vuelva dentro de
tres a??os
entonces como pod??is ver el
planteamiento que hice hace un instante
utilizando el operador l??gico aqu?? no es
del todo adecuado para este programa en
concreto
por los dos motivos porque si utilizamos
ventanas de pronto no tiene sentido que
me saque la segunda y porque s??
le digo que tengo 15 a??os me va a decir
que no tenga que no tengo la edad
necesaria no perd??n si le digo que tengo
una edad adecuada pero no tengo importe
vamos a hacerlo para que lo ve??is mirar
si yo ejecuto el programa y ahora le
digo introduce tu edad pues mira tengo
50 a??os y ahora me dice introduce tus
ahorros pues tengo 20 euros est?? claro
que no puedo sacarme el carnet el
problema viene aqu?? viene que me dice
que no tengo la edad necesaria cuando
tengo 50 a??os y que vuelva dentro de -32
no tenemos esos dos problemas como
solucionarlos es aqu?? donde uno pues va
adquiriendo mente de programador
mirar y esto es un mensaje que lanz?? a
los que est??n comenzando a programar que
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
l??gico que no ves si no te gusta nada de
eso la programaci??n va a ser dif??cil que
encaje en tu vida aqu?? lo que tenemos
que hacer en este caso es pensar y esto
ya depende solamente de nuestro
intelecto no depende de que sepas m??s o
menos javascript tenemos que pensar
qu?? soluci??n le podemos dar a este
programa para que funcione bien y ya os
anticipo que la soluci??n pasa por meter
esta instrucci??n es decir cuando nos
pregunta los ahorros dentro de la jtf y
quedar??a muy bien por ejemplo
entre los dos documentos right
y ahora una vez que hemos hecho esto a
continuaci??n de haber metido esa ventana
de pronto y la declaraci??n de la
variable importe dentro del if por
supuesto tenemos que quitar esta
condici??n que ya no nos sirve
simplemente evaluar si es mayor o igual
que 18 bien pues a continuaci??n de la
segunda ventana de prom yo aqu??
incluir??a un id pero f??jate que steve
est?? dentro de la anterior es un ife
anidado univ dentro de otro if y aqu??
que le voy a preguntar le voy a
preguntar si el importe que el usuario
ha introducido justo antes en la ventana
de prom es mayor o igual que 150 en ese
caso que me diga document.no wright
puedes obtener el carn??
es decir esta instrucci??n que ten??amos
aqu?? para que la voy a escribir otra vez
si la tenemos justo debajo lo que voy a
hacer va a ser trasladarla a
continuaci??n de steve y si no f??jate que
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
f??jate que tanto en este como en este
else prescindido de las llaves las pod??a
haber puesto pero como son unique y els
que van dentro de otro if y adem??s cada
uno de ellos tiene una ??nica l??nea y
adem??s el programa todav??a no es muy
complejo aunque lo que los que est??is
empezando no os lo cre??is pues he
decidido prescindir de las llaves pero
si las pon??is funciona exactamente igual
y si no me equivocado en nada este
programa ahora s?? que funciona ahora
bien aquellos que est??is comenzando a
programar seguramente le vais a tener
que meter una buena pensada a todo este
c??digo recordar siempre que el flujo va
de arriba abajo entonces aqu?? lo primero
que va a hacer el programa es
preguntarme la edad y si la edad es
menor que 18 si la edad por ejemplo
imaginaos que es 15
pues nos quitamos muchos problemas
porque esto no se cumple como no se
cumple nada de esto se va a ejecutar es
decir no me va a preguntar cu??les son
mis ahorros no tiene sentido porque no
tengo 15 a??os para que me vas a
preguntar los ahorros entonces el
programa ignora todo esto y directamente
se le vales y me dice que no tengo la
edad me dice que vuelva dentro de equis
a??os etc??tera no ahora bien si la edad
es mayor o igual que 18 entonces va a
hacer todo esto y va a ignorar por
completo el else y qu?? va a hacer en
primer lugar esto casi no lo voy a ver
no pero antes de que salga la ventana
emergente de los ahorros lo que va a
hacer va a ser escribir en pantalla que
soy mayor de edad despu??s saldr?? la
ventana emergente pregunt??ndome los
ahorros y es aqu?? donde si le digo que
tengo m??s de 150 euros me ha decir que
tengo el carnet claro si estoy aqu?? es
porque tengo m??s de 18 a??os y si estoy
aqu?? tambi??n es porque tengo m??s de 150
euros y si no tengo m??s de 50 euros
ignorar?? steve y entrar?? en el el set
bien ejemplo de its anidados ejemplo
para utilizar ventanas de tipo pero no
vamos a guardar cambios que no prueba el
programa guardamos cambios vamos a poner
una edad bueno inferior a 18 para
empezar tengo 14 a??os vamos a ponerlo
aqu?? 14 aceptamos pues mirad a??n no
tengo la edad necesaria para tener el
carnet vuelve dentro de cuatro a??os
parece que funciona no vamos a volver a
ejecutar el programa ahora le digo que
tengo 29
aqu?? 29 aceptamos y f??jate como ahora ha
entrado aqu?? el programa se encuentra
detenido en esta l??nea y me est??
preguntando por los ahorros si yo ahora
le digo que tengo 220 euros para decir
que puedo obtener el carnet es decir va
a ejecutar esta l??nea
est?? la va a ignorar porque es ??l el pse
entonces y se cumple esto ignora leerse
esto ya lo ignoro antes cuando entramos
aqu?? y continuar?? la ejecuci??n haciendo
un salto de l??nea y dici??ndome que acabo
de evaluar la edad del candidato eres
mayor de edad puedes obtener el carnet
acabamos de evaluar la edad del
candidato y el ??ltimo caso que nos toca
comprobar es si tengo 29 otra vez es muy
f??cil escribir en estas ventanas el dato
en el programa no hay que hacer clic
antes 29 vamos a decirle ahora que tengo
por ejemplo veinte euros y ahora lo que
har?? ser?? ignorar este mensaje porque
estoy aqu?? y la edad perd??n el importe
no se cumple y s?? que va a ejecutar esto
es decir va a imprimir el importe en el
suficiente no tienes carnet luego har??
el salto de l??nea e imprimir?? acabamos
de evaluar la edad e candidato
y efectivamente as?? es bueno pues visto
seguramente insisto tendr??is que meterle
una pensada a este programa en breve os
empezar?? a plantear los primeros
ejercicios para practicar con los
condicionales nada m??s vamos a dejar
este v??deo en el punto en el que nos
encontramos continuaremos avanzando en
breve hasta la pr??xima
