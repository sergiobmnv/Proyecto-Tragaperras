/* Evento Blanco y Negro */
var blancoNegro = document.getElementById("botonBlancoNegro").addEventListener("click", function () {
    // Cambiar el fondo de la página (imagen)
    if (document.body.classList.contains('blancoNegro')) {
        // Si está en modo blanco y negro, cambiar la imagen a la original
        document.body.style.backgroundImage = "url('../assets/Fondo-Body.jpg')";
    } else {
        // Si está en modo color, cambiar la imagen a la modificada
        document.body.style.backgroundImage = "url('../assets/Fondo-Body-modified.jpg')";
    }

    // Cambiar el color de fondo de los botones
    var botonesDepositar = document.getElementById("depositarBtn");
    botonesDepositar.style.backgroundColor = document.body.classList.contains('blancoNegro');
    var botonRetirar = document.getElementById("retirarBtn");
    botonRetirar.style.backgroundColor = document.body.classList.contains('blancoNegro');

    // Cambiar entre el modo blanco y negro y el modo normal
    document.body.classList.toggle('blancoNegro');

    // Cambiar el icono de sol a luna y viceversa
    let icono = document.getElementById('iconoModo');

    if (document.body.classList.contains('blancoNegro')) {
        icono.classList.remove('fas', 'fa-moon');
        icono.classList.add('fas', 'fa-sun');
    } else {
        icono.classList.remove('fas', 'fa-sun');
        icono.classList.add('fas', 'fa-moon');
    }
});