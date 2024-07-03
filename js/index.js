//Funcion de Distorsión

//Poner la distorsión
function distorsion(enlaces){
    document.querySelectorAll(".enlaces").forEach(function(imagenencima) {
    if (imagenencima !== enlaces ){
        imagenencima.classList.add("filtro_distorsionado")
    }
    });
}

//Quitar distorsión
function sin_distorsion(){
    document.querySelectorAll(".enlaces").forEach(function(imagen) {
        imagen.classList.remove("filtro_distorsionado")
    });
}

//Modales

function abrir_modal(modalId) {
    document.getElementById('en_negro').style.display = 'block';
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.showModal();
}

function cerrar_modal() {
    document.getElementById('en_negro').style.display = 'none';
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
        modals[i].close();
    }
}

//Abrir y cerrar menú

let menu_toggle = document.querySelector('.menu_toggle');
let navegador = document.querySelector('.navegador');

menu_toggle.addEventListener('click', function() {
    navegador.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    var flecha = document.querySelector('.flecha');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            flecha.classList.add('animate');
        } else {
            flecha.classList.remove('animate');
        }
    });
});

//Cambio de claro/oscuro
const body = document.querySelector("body");
const inicio = document.getElementById("presentacion");
const lista = document.getElementsByTagName('section');
const menu = document.querySelector(".navegador");
const toggle = document.getElementById("cambio");
const proyetos = document.getElementById("proyecto");
const cursos = document.getElementById("curso");
const experiencia = document.getElementById("experiencia");
const menciones = document.getElementById("mencion");
const  estudios = document.getElementById("estudios");
const footer = document.querySelector(".footer");
const presentacion = document.getElementById("presentacion");
const cbm = document.getElementsByClassName("cbm");
const listItems = document.querySelectorAll("nav ul li a");
const derechos = document.querySelector(".derechos p");
const flecha = document.querySelector(".flecha a i");

toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    menu.classList.toggle("active");
    inicio.classList.toggle("active");
    proyetos.classList.toggle("active");
    cursos.classList.toggle("active");
    experiencia.classList.toggle("active");
    menciones.classList.toggle("active");
    estudios.classList.toggle("active");
    footer.classList.toggle("active");
    presentacion.classList.toggle("active");
    derechos.classList.toggle("active");
    flecha.classList.toggle("active");

    Array.from(lista).forEach(function(item) {
        item.classList.toggle("active");
    });

    Array.from(cbm).forEach(function(item) {
        item.classList.toggle("active");
    });

    listItems.forEach(function(item) {
        item.classList.toggle("active");
    });
}

