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
