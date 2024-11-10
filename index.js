
/*--------------------------------------------------------------------------------------- */

// Variables de saldo y elementos del DOM
let saldo = 0; // Saldo inicial
const saldoElemento = document.getElementById('saldo');

// Modal de depósito y sus elementos
const depositoModal = document.getElementById('depositoModal');
const depositoBtn = document.getElementById('depositarBtn');
const confirmarDepositoBtn = document.getElementById('confirmarDeposito');
const cantidadDepositoInput = document.getElementById('cantidadDeposito');
const closeModalBtn = document.querySelector('.close');

// Modal de retiro y sus elementos
const retiroModal = document.getElementById('retiroModal');
const retirarBtn = document.querySelector('.retirar'); // Suponiendo que el botón tiene esta clase
const confirmarRetiroBtn = document.getElementById('confirmarRetiro');
const cantidadRetiroInput = document.getElementById('cantidadRetiro');
const closeRetirarModalBtn = document.querySelector('.close-retirar');

// Función para actualizar el saldo en pantalla
function actualizarSaldo() {
    saldoElemento.textContent = saldo;
}

// Abrir el modal al hacer clic en "Depositar"
depositoBtn.addEventListener('click', () => {
    depositoModal.style.display = 'block';
});

// Cerrar el modal de depósito
closeModalBtn.addEventListener('click', () => {
    depositoModal.style.display = 'none';
});

// Abrir el modal al hacer clic en "Retirar"
retirarBtn.addEventListener('click', () => {
    retiroModal.style.display = 'block';
});

// Cerrar el modal de retiro
closeRetirarModalBtn.addEventListener('click', () => {
    retiroModal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del modal de depósito
window.addEventListener('click', (event) => {
    if (event.target === depositoModal) {
        depositoModal.style.display = 'none';
    }
    // Cerrar el modal al hacer clic fuera del modal de retiro
    if (event.target === retiroModal) {
        retiroModal.style.display = 'none';
    }
});

// Confirmar el depósito y actualizar el saldo
confirmarDepositoBtn.addEventListener('click', () => {
    const cantidadDeposito = parseFloat(cantidadDepositoInput.value);
    
    // Validación para asegurar que se ingrese una cantidad válida
    if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }
    
    saldo += cantidadDeposito; // Actualizar saldo
    actualizarSaldo(); // Actualizar en pantalla

    // Limpiar el campo de entrada y cerrar el modal
    cantidadDepositoInput.value = '';
    depositoModal.style.display = 'none';
});

// Confirmar el retiro y actualizar el saldo
confirmarRetiroBtn.addEventListener('click', () => {
    const cantidadRetiro = parseFloat(cantidadRetiroInput.value);
    
    // Validación para asegurar que se ingrese una cantidad válida
    if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }
    
    // Verificar si hay suficiente saldo para retirar
    if (cantidadRetiro > saldo) {
        alert("No tienes suficiente saldo para retirar esa cantidad.");
        return;
    }

    saldo -= cantidadRetiro; // Actualizar saldo
    actualizarSaldo(); // Actualizar en pantalla

    // Limpiar el campo de entrada y cerrar el modal
    cantidadRetiroInput.value = '';
    retiroModal.style.display = 'none';
});

// Inicializar el saldo en pantalla
actualizarSaldo();

/*--------------------------------------------------------------------------------------- */

// Inicializa la apuesta en 10 créditos
let apuesta = 10;

// Selecciona el elemento donde se mostrará la apuesta
const apuestaDisplay = document.getElementById('apuesta');

// Función para actualizar el display de apuesta
function actualizarApuesta() {
    apuestaDisplay.textContent = apuesta; // Actualiza el contenido del span con el id 'apuesta'
}

// Botón de aumentar la apuesta
document.getElementById('subirApuesta').addEventListener('click', function() {
    apuesta += 10; // Aumenta la apuesta
    actualizarApuesta(); // Llama a la función para actualizar el display
});

// Botón de disminuir la apuesta
document.getElementById('bajarApuesta').addEventListener('click', function() {
    if (apuesta > 10) { // Asegúrate de que la apuesta no baje de 10
        apuesta -= 10; // Disminuye la apuesta 
        actualizarApuesta(); // Llama a la función para actualizar el display
    }
});

// Inicializa el display de la apuesta al cargar la página
actualizarApuesta();


/*--------------------------------------------------------------------------------------- */

    // Función del botón "Girar" con comprobación de saldo
    girarBtn.addEventListener("click", function() {
        if (saldo >= apuesta) {
            // Saldo suficiente: Descontamos la apuesta y giramos
            saldo -= apuesta;
            actualizarSaldo();
    
            // Quitamos el mensaje de saldo insuficiente
            girarBtn.classList.remove("insufficient");
            girarBtn.removeAttribute("data-tooltip");
    
            
            girarCeldas();
    
            // Aquí se podría añadir la lógica de verificación de combinaciones ganadoras
        } else {
            // Saldo insuficiente: mostrar mensaje al hacer hover
            girarBtn.classList.add("insufficient");
            girarBtn.setAttribute("data-tooltip", "Saldo insuficiente");
        }
    });

    // Función para hacer girar las celdas
function girarCeldas() {
    const celdas = document.querySelectorAll(".celda");
    const emojis = ["🐉", "⚡", "🪓", "🌠", "🦣"]; // Lista de símbolos para el juego

    // Agregar la animación de giro a las celdas
    document.querySelector(".tableroSlot").classList.add("girar");

    // Crear una función que cambia los símbolos aleatorios
    let interval = setInterval(function() {
        celdas.forEach(celda => {
            let randomIndex = Math.floor(Math.random() * emojis.length);
            celda.textContent = emojis[randomIndex];
        });
    }, 100); // Cambiar de símbolo cada 100ms para simular el giro

    // Después de 2 segundos, detener la animación y mostrar los resultados finales
    setTimeout(function() {
        clearInterval(interval); // Detener el intervalo
        // Eliminar la clase de animación de giro
        document.querySelector(".tableroSlot").classList.remove("girar");
    }, 2000); // Duración del giro (2 segundos en este caso)
}

// Función para verificar las combinaciones ganadoras
function verificarCombinaciones() {
    const celdas = document.querySelectorAll(".celda");
    const combinaciones = {
        "🐉🐉🐉": 10,
        "⚡⚡⚡": 15,
        "🪓🪓🪓": 20,
        "🌠🌠🌠": 25,
        "🦣🦣🦣": 30
    };

    let resultado = "";
    let ganador = false;
    
    // Comprobamos las combinaciones horizontales (filas)
    for (let i = 0; i < celdas.length; i += 3) {
        const combinacion = `${celdas[i].textContent}${celdas[i+1].textContent}${celdas[i+2].textContent}`;
        if (combinaciones[combinacion]) {
            resultado = `¡Has ganado ${combinaciones[combinacion]} créditos!`;
            ganador = true;
            saldo += combinaciones[combinacion]; // Añadir los créditos ganados al saldo
            actualizarSaldo(); // Actualizar el saldo en pantalla
            break;
        }
    }

    // Mostrar el mensaje de ganancia o pérdida
    if (ganador) {
        document.getElementById('mensajeGanador').textContent = resultado;
        document.getElementById('mensajeGanador').style.display = 'block';
    } else {
        document.getElementById('mensajeGanador').textContent = "¡No has ganado esta vez!";
        document.getElementById('mensajeGanador').style.display = 'block';
    }

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        document.getElementById('mensajeGanador').style.display = 'none';
    }, 3000);
}

// Función para actualizar el saldo
function actualizarSaldo() {
    saldoElemento.textContent = saldo; // Actualiza el contenido del saldo
}

// Asegúrate de inicializar el saldo en pantalla
actualizarSaldo();


/*--------------------------------------------------------------------------------------- */

/* Funcion Reloj */
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0'); // Formato de 2 dígitos
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const tiempo = `${horas}:${minutos}:${segundos}`; // Formato HH:MM:SS
    document.getElementById('horaActual').textContent = tiempo; // Actualizar el contenido del reloj
}

// Llama a la función al cargar la página y cada segundo
actualizarReloj(); // Inicializar el reloj
setInterval(actualizarReloj, 1000); // Actualizar cada segundo

/*--------------------------------------------------------------------------------------- */

   /* Evento Blanco y Negro */
var blancoNegro = document.getElementById("botonBlancoNegro").addEventListener("click", function() {
    // Cambiar el fondo de la página (imagen)
    if (document.body.classList.contains('blancoNegro')) {
        // Si está en modo blanco y negro, cambiar la imagen a la original
        document.body.style.backgroundImage = "url('assets/Fondo-Body.jpg')";
    } else {
        // Si está en modo color, cambiar la imagen a la modificada
        document.body.style.backgroundImage = "url('assets/Fondo-Body-modified.jpg')";
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
        icono.classList.remove('fas', 'fa-sun');
        icono.classList.add('fas', 'fa-moon');
    } else {
        icono.classList.remove('fas', 'fa-moon');
        icono.classList.add('fas', 'fa-sun');
    }
});

/*--------------------------------------------------------------------------------------- */

// Seleccionar el elemento de audio y la barra de volumen
const musicaFondo = document.getElementById('musicaFondo');
const controlVolumen = document.getElementById('controlVolumen');
const iconoMusica = document.getElementById('iconoMusica');

// Establecer el volumen inicial del audio
musicaFondo.volume = controlVolumen.value;

// Escuchar los cambios en la barra de volumen
controlVolumen.addEventListener('input', (event) => {
    // Cambiar el volumen del audio según el valor de la barra de volumen
    musicaFondo.volume = event.target.value;

    // Cambiar el icono según el nivel de volumen
    if (event.target.value == 0) {
        iconoMusica.className = 'fas fa-volume-mute'; // Silencio
    } else if (event.target.value < 0.5) {
        iconoMusica.className = 'fas fa-volume-down'; // Volumen bajo
    } else {
        iconoMusica.className = 'fas fa-volume-up'; // Volumen alto
    }
});



