
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

    //Funcion para Daltonicos.
    const iconoDaltonico = document.getElementById('iconoDaltonico');
        const body = document.body;

        iconoDaltonico.addEventListener('click', () => {
            // Alternar entre modo normal y modo daltónico
            body.classList.toggle('modo-daltonico');

            // Cambia el contenido del botón según el modo
            if (body.classList.contains('modo-daltonico')) {
                iconoDaltonico.textContent = "🌞"; // Icono para modo normal
            } else {
                iconoDaltonico.textContent = "🦉"; // Icono para modo daltónico
            }
        });

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


// Seleccionar el elemento de audio y la barra de volumen
const musicaFondo = document.getElementById('musicaFondo');
const controlVolumen = document.getElementById('controlVolumen');
const iconoMusica = document.getElementById('iconoMusica');

// Establecer el volumen inicial del audio según el valor inicial de la barra
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


/*--------------------------------------------------------------------------------------- */
