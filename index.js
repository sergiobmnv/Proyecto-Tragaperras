let saldo = 0; // Saldo inicial
let tiradas = 0;  // Tiradas iniciales

const tiradasElemento = document.getElementById('tiradas');
const jackpotBtn = document.getElementById('jackpotBtn');
const saldoElemento = document.getElementById('saldo');

// Modal de depósito y sus elementos
const depositoModal = document.getElementById('depositoModal');
const depositoBtn = document.getElementById('depositarBtn');
const confirmarDepositoBtn = document.getElementById('confirmarDeposito');
const cantidadDepositoInput = document.getElementById('cantidadDeposito');
const closeModalBtn = document.querySelector('.close');

// Modal de retiro y sus elementos
const retiroModal = document.getElementById('retiroModal');
const retirarBtn = document.querySelector('.retirar');
const confirmarRetiroBtn = document.getElementById('confirmarRetiro');
const cantidadRetiroInput = document.getElementById('cantidadRetiro');
const closeRetirarModalBtn = document.querySelector('.close-retirar');

// Elementos del modal de premio
const premioModal = document.getElementById('premioModal');
const premioMensaje = document.getElementById('premioMensaje');
const closePremioBtn = document.querySelector('.close-premio');

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
        mostrarMensaje("Por favor, ingresa una cantidad válida.");
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
        mostrarMensaje("Por favor, ingresa una cantidad válida.");
        return;
    }
    if (cantidadRetiro > saldo) {
        mostrarMensaje("No tienes suficiente saldo para retirar esa cantidad.");
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

let apuesta = 20; // Apuesta inicial
const MAX_APUESTA = 200; // Límite máximo de apuesta

// Selecciona el elemento donde se mostrará la apuesta
const apuestaDisplay = document.getElementById('apuesta');

// Modal para apuesta máxima
const modalApuestaMaxima = document.getElementById('modalApuestaMaxima');
const cerrarModalApuesta = document.getElementById('cerrarModalApuesta');

// Función para actualizar el display de apuesta
function actualizarApuesta() {
    apuestaDisplay.textContent = apuesta; // Actualiza el contenido del span con el id 'apuesta'
}

// Mostrar el modal de apuesta máxima
function mostrarModalApuestaMaxima() {
    modalApuestaMaxima.style.display = 'block';
}

// Cerrar el modal de apuesta máxima al hacer clic en la "X"
cerrarModalApuesta.addEventListener('click', () => {
    modalApuestaMaxima.style.display = 'none';
});

// Cerrar el modal de apuesta máxima al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modalApuestaMaxima) {
        modalApuestaMaxima.style.display = 'none';
    }
});

// Botón de aumentar la apuesta
document.getElementById('subirApuesta').addEventListener('click', function () {
    if (apuesta < MAX_APUESTA) { // Verifica si no se excede la apuesta máxima
        apuesta += 10; // Aumenta la apuesta
        actualizarApuesta(); // Llama a la función para actualizar el display
    } else {
        mostrarModalApuestaMaxima(); // Muestra el modal cuando se alcanza el máximo
    }
});

// Botón de disminuir la apuesta
document.getElementById('bajarApuesta').addEventListener('click', function () {
    if (apuesta > 10) { // Verifica que la apuesta no sea menor a 10
        apuesta -= 10;
        actualizarApuesta();
    }
});

// Inicializa el display de la apuesta al cargar la página
actualizarApuesta();

/*--------------------------------------------------------------------------------------- */

// Variable para controlar si un giro está activo
let giroActivo = false;
// Evento del botón "Girar" con comprobación de saldo
girarBtn.addEventListener("click", function () {
    if (giroActivo) return; // Evitar que se pueda pulsar mientras gira

    if (tiradas > 0) {
        iniciarGiro();
        tiradas--;
        tiradasElemento.textContent = tiradas;
    } else if (saldo >= apuesta) {
        // Saldo suficiente: Descontamos la apuesta y giramos
        saldo -= apuesta;
        actualizarSaldo();

        // Quitamos el mensaje de saldo insuficiente
        girarBtn.classList.remove("insufficient");
        girarBtn.removeAttribute("data-tooltip");

        iniciarGiro();
    } else {
        // Saldo insuficiente: mostrar mensaje al hacer hover
        girarBtn.classList.add("insufficient");
        girarBtn.setAttribute("data-tooltip", "Saldo insuficiente");
    }
});

// Detectar la tecla Espacio para activar el giro
document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !giroActivo) {
        event.preventDefault(); // Evita que la página haga scroll al presionar Espacio

        if (tiradas > 0) {
            iniciarGiro();
            tiradas--;
            tiradasElemento.textContent = tiradas;
        } else if (saldo >= apuesta) {
            // Saldo suficiente: Descontamos la apuesta y giramos
            saldo -= apuesta;
            actualizarSaldo();

            // Quitamos el mensaje de saldo insuficiente
            girarBtn.classList.remove("insufficient");
            girarBtn.removeAttribute("data-tooltip");

            iniciarGiro();
        } else {
            // Opcional: Notificar de saldo insuficiente al intentar girar con Espacio
            console.log("Saldo insuficiente");
        }
    }
});

// Función para manejar el giro completo (inicia y finaliza)
function iniciarGiro() {
    giroActivo = true; // Bloquear el botón
    girarBtn.disabled = true; // Opcional: deshabilitar visualmente el botón
    girarCeldas();

    // Reactivar el botón después de que termine el giro
    setTimeout(() => {
        giroActivo = false;
        girarBtn.disabled = false; // Opcional: reactivar visualmente el botón
    }, 2000); // Duración del giro (2 segundos)
}

// Función para hacer girar las celdas
const simbolos = [
    "../assets/Dragon-icono.png",
    "../assets/trueno-icono.png",
    "../assets/espadas.png",
    "../assets/zeus-icono.png",
    "../assets/bufalo.png"
];

function girarCeldas() {
    const celdas = document.querySelectorAll(".celda");

    // Agrega una clase de animación a cada celda
    celdas.forEach(celda => {
        celda.classList.add("animando");
    });

    // Crear una función que cambia los símbolos aleatorios
    let interval = setInterval(function () {
        celdas.forEach(celda => {
            let randomIndex = Math.floor(Math.random() * simbolos.length);
            let imgSrc = simbolos[randomIndex];

            // Limpia el contenido de la celda
            celda.innerHTML = "";

            // Crear un nuevo elemento de imagen
            let img = document.createElement("img");
            img.src = imgSrc;
            img.style.width = "20%"; // Ajusta el tamaño si es necesario

            // Agregar la imagen a la celda
            celda.appendChild(img);
        });
    }, 50); // Cambiar de símbolo cada 50ms para simular el giro

    // Después de 2 segundos, detener la animación y mostrar los resultados finales
    setTimeout(function () {
        clearInterval(interval); // Detener el intervalo
        // Remover la clase de animación de las celdas para detener el efecto de movimiento
        celdas.forEach(celda => {
            celda.classList.remove("animando");
        });
    }, 2000); // Duración del giro (2 segundos en este caso)
}

// Inicializar el saldo en pantalla (si tienes una función para ello)
actualizarSaldo();


/*--------------------------------------------------------------------------------------- */
/*Funcion para mostrar el modal de la informacion de las conbinaciones*/
// Selección de elementos
const botonInfo = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
const closeInfo = document.querySelector('.close-info');

// Abrir el modal al hacer clic en el botón de información
botonInfo.addEventListener('click', () => {
    infoModal.style.display = 'block';
});

// Cerrar el modal al hacer clic en la "X"
closeInfo.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
});

/*------------------------------------------------------------------------------------------*/
/*Mensaje error retirar*/
function mostrarMensaje(texto, color = '#ff4d4d') {
    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = texto;
    mensajeElemento.style.backgroundColor = color;
    mensajeElemento.classList.add('mostrar');

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeElemento.classList.remove('mostrar');
    }, 3000);
}

/*------------------------------------------------------------------------------------------*/
//Modal para mostrar la informacion de las combinaciones.
// Mostrar el modal cuando se necesita
document.querySelector('.modal-info').classList.add('show');

// Cerrar el modal al hacer clic en la 'X'
document.querySelector('.close-info').addEventListener('click', function () {
    document.querySelector('.modal-info').classList.remove('show');
});


/*-------------------------------------------------------------------------------------------*/

// Evento para el botón de Jackpot
const saldoActualizado = document.getElementById('saldo-actualizado');

jackpotBtn.addEventListener('click', () => {
    // Comprobar si el saldo es suficiente para jugar
    if (saldo >= 200) {
        saldo -= 200;  // Restar 200 del saldo
        tiradas += 20;  // Sumar 20 tiradas gratis

        // Actualizar los valores mostrados en pantalla
        saldoElemento.textContent = `Saldo: ${saldo}`;
        tiradasElemento.textContent = `Tiradas: ${tiradas}`;

        // Mostrar el modal de saldo suficiente
        const modalSaldoSuficiente = document.getElementById('modal-saldo-suficiente');
        saldoActualizado.textContent = saldo; // Mostrar saldo actualizado en el modal
        modalSaldoSuficiente.style.display = 'block';

    } else {
        // Mostrar el modal de saldo insuficiente
        const modalSaldoInsuficiente = document.getElementById('modal-saldo-insuficiente');
        modalSaldoInsuficiente.style.display = 'block';
    }
});

// Función para cerrar el modal
function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';  // Ocultar el modal
}

// Evento para cerrar el modal de saldo suficiente
document.getElementById('cerrar-saldo-suficiente').addEventListener('click', () => {
    cerrarModal('modal-saldo-suficiente');
});

// Evento para cerrar el modal de saldo insuficiente
document.getElementById('cerrar-saldo-insuficiente').addEventListener('click', () => {
    cerrarModal('modal-saldo-insuficiente');
});