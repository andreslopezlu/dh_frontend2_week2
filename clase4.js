// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector('h1');
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
console.log(itemsMenu);

// hacemos un selector más específico👇
const infoExtra = document.querySelector('.info .clima')
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll('article');

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach( articulo =>{
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


// Aqui se resuelve el ejercicio 1 en algunos de los nodos del DOM
let head = document.querySelector('head');
// console.log(head);
let body = document.querySelector('body');
// console.log(body);
let h1 = document.querySelector('h1');
// console.log(h1);
let nav = document.querySelector('nav');
// console.log(nav);
let ul = document.querySelector('ul');
// console.log(ul);
let lista = document.querySelectorAll('ul li');
// console.log(lista);
let tema = document.querySelector('.tema');
// console.log(tema);
let clima = document.querySelector('.info .clima');
// console.log(clima);
let dolar = document.querySelector('.info .dolar');
// console.log(dolar);
let articulo = document.querySelectorAll('article');
// console.log(articulo);


// Se revisa la diferencia entre innerHTML e innerText: el primero retorna todo el codigo HTML dentro del nodo al que se aplica, el segundo retorna el contenido dentro de las etiquetas
articulo.forEach(art => {
    console.log(art.innerHTML)
    console.log(art.innerText)
})


// Esta funcion asigna un nuevo titulo h1 a la pagina
let nuevoTitulo = `<h1>Semala</h1>`;
function asignarNuevoTitulo (template){
    let titulo = document.querySelector('h1');
    // let html = titulo.innerHTML = template;
    titulo.innerText = template;
    console.log(text)
}
// asignarNuevoTitulo(nuevoTitulo);


// esta funcion asigna un nuevo titulo con el formato 'Titulo 1'
let subtitulos = document.querySelectorAll('h2')
let contador = 0;
subtitulos.forEach(subtitulo => {
    let nuevoSubtitulo = `Titulo ${contador}`
    subtitulo.innerText = nuevoSubtitulo
    contador++;
})

