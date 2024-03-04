// Menú rápido
let menu_visible = false;
let menu = document.getElementById("nav");
let contenedormenu = document.getElementById('navbar');

// Este es div que contiene al menu, ejecuta el método para mostrarlo o ocultarlo.
contenedormenu.addEventListener('click', function () {mostrarOcultarMenu()});

// Función para la muestra o ocultación del menu

function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Esto permite al menú esconderse al elegir una opción.
let links = document.querySelectorAll("nav a");
for(let x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Función que crea las barras que tienes cada pila
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Selección de cada barra (div en el html) para su posterior pintada, las creamos.
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let laravel = document.getElementById("wordpress");
crearBarra(laravel);
let angular = document.getElementById("photoshop");
crearBarra(angular);
let php = document.getElementById("php");
crearBarra(php);
let sql = document.getElementById("ilustrator");
crearBarra(sql);
// Este array tiene la cantidad de barritas por pila para poder pintarlo mas tarde.

let contadores = [-1,-1,-1,-1,-1,-1];
//Variable aux para saber si se ejecuta o la animación de forma que no se ejecute como loca
let entro = false;

//Esta función es la que crea la animación. Entre 7 y 18 años lo hice. No se ni porque funciona, solo se que stackoverflow es importante.
function efectoHabilidades(){
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(laravel, 11, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(angular, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(sql, 11, 5, intervalIlustrator);
        },100);
    }
}

//Función diseñada para el pintado de cada barra
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#bfe2dd";
    }else{
        clearInterval(interval)
    }
}

//Se aplica la animación facherita para cuando se use la rueda
window.onscroll = function(){
    efectoHabilidades();
}