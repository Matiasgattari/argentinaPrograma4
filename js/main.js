//funcionalidad al boton de Ver cursos actuales
const botonCursos = document.getElementById("botonCursoActual");

botonCursos.addEventListener("click", function () {
    let display = document.getElementById("cursoActualDiv").style.display

    if (display === "none") {
        document.getElementById("cursoActualDiv").style.display = "block";

    } else {
        document.getElementById("cursoActualDiv").style.display = "none";
    }

});

const botonColores = document.getElementById("botonColores")

//cambiar colores de la página a gama rosa
botonColores.addEventListener("click", function () {
    
    //cuerpo
    let fondoCuerpo = document.getElementById("cuerpoCV").style.backgroundColor = "rgb(236, 213, 213)"
    let fondoCuerpo2 = document.getElementById("parrafo1").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    let fondoCuerpo3 = document.getElementById("parrafo2").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    //listas
    let fondoLista1 = document.getElementById("lista1").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    let fondoLista2 = document.getElementById("lista2").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    let fondoLista3 = document.getElementById("lista3").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    let fondoLista4 = document.getElementById("lista4").style.backgroundColor = "rgba(240, 203, 203, 0.938)"
    //cabecera
    let fondoCabecera = document.getElementById("cabecera").style.backgroundColor = "rgb(236, 213, 213)"
    let tituloCV = document.getElementById("tituloCV").style.backgroundColor = "rgba(255, 123, 123, 0.638)"
    let descripcionCV = document.getElementById("descripcionCV").style.backgroundColor = "rgba(255, 123, 123, 0.638)"

});

//volver colores de página a gama original
botonColores.addEventListener("dblclick", function () {

 //cuerpo
 let fondoCuerpo = document.getElementById("cuerpoCV").style.backgroundColor = "rgb(255, 255, 255)"
 let fondoCuerpo2 = document.getElementById("parrafo1").style.backgroundColor = "rgb(251, 251, 252)"
 let fondoCuerpo3 = document.getElementById("parrafo2").style.backgroundColor = "rgb(251, 251, 252)"
 //listas
 let fondoLista1 = document.getElementById("lista1").style.backgroundColor = "rgb(251, 251, 252)"
 let fondoLista2 = document.getElementById("lista2").style.backgroundColor = "rgb(251, 251, 252)"
 let fondoLista3 = document.getElementById("lista3").style.backgroundColor = "rgb(251, 251, 252)"
 let fondoLista4 = document.getElementById("lista4").style.backgroundColor = "rgb(251, 251, 252)"
 //cabecera
 let fondoCabecera = document.getElementById("cabecera").style.backgroundColor = "rgb(255, 255, 255)"
 let tituloCV = document.getElementById("tituloCV").style.backgroundColor = "rgb(54, 54, 54)"
 let descripcionCV = document.getElementById("descripcionCV").style.backgroundColor = "rgb(54, 54, 54)"

})


const botonInfoColores = document.getElementById("botonInfoColores")
botonInfoColores.addEventListener("click", function () {

    Swal.fire({
        icon: 'info',
        title: '<h1 style="color:white; font-size:24px"> ¿Cómo cambiar los colores del sitio?</h1>',
        text: 'Para cambiar la combinacion de colores de la página haga click en "cambiar color" y seleccione la combinación deseada. Para restaurar la combinación original haga dobleclick.',
        footer: 'Sitio web creado por Matías Gattari',
        background: "rgba(237, 215, 250, 0.984)"
    })

})