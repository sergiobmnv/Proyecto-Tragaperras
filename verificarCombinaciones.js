// Función para verificar combinaciones ganadoras
// Lista de imágenes de símbolos
const combinaciones = [
    'assets/Dragon-icono.png',
    'assets/trueno-icono.png',
    'assets/espadas.png',
    'assets/zeus-icono.png',
    'assets/bufalo.png'
];

// Premios asociados a las imágenes
const premios = {
    '../assets/Dragon-icono.png': 10,
    '../assets/trueno-icono.png': 15,
    '../assets/espadas.png': 20,
    '../assets/zeus-icono.png': 25,
    '../assets/bufalo.png': 30
};

// Función para verificar combinaciones ganadoras
function verificarGanancia() {
    const celdas = document.querySelectorAll('.celda');
    const simbolosActuales = Array.from(celdas).map(celda => celda.querySelector('img').src);

    // Definimos todas las combinaciones ganadoras
    const combinacionesGanadoras = [
        // Horizontales
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Diagonales
        [0, 4, 8],
        [2, 4, 6],

        //Verticales
        [3, 4, 8],
        [3, 4, 2],
        [0, 1, 5],
        [6, 7, 5]
    ];

    // Variable para determinar si el jugador ganó
    let gano = false;

    // Recorre cada combinación ganadora para verificar si hay coincidencia
    combinacionesGanadoras.forEach(combinacion => {
        const [a, b, c] = combinacion;

        // Verifica si los tres símbolos en la combinación son iguales
        if (simbolosActuales[a] === simbolosActuales[b] && simbolosActuales[b] === simbolosActuales[c]) {
            // Agrega clase 'ganadora' para resaltar las celdas ganadoras
            celdas[a].classList.add('ganadora');
            celdas[b].classList.add('ganadora');
            celdas[c].classList.add('ganadora');

            if (a == 0 && b == 1 && c == 2) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 3 && b == 4 && c == 5) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 6 && b == 7 && c == 8) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 0 && b == 4 && c == 8) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 2 && b == 4 && c == 6) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 3 && b == 4 && c == 8) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 3 && b == 4 && c == 2) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 0 && b == 1 && c == 5) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            } else if (a == 6 && b == 7 && c == 5) {
                if (simbolosActuales[a].substring(22) == combinaciones[0] && simbolosActuales[b].substring(22) == combinaciones[0] && simbolosActuales[c].substring(22) == combinaciones[0]) {
                    mostrarPremio('¡Has ganado 10 créditos!');
                    saldo += 10; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[1] && simbolosActuales[b].substring(22) == combinaciones[1] && simbolosActuales[c].substring(22) == combinaciones[1]) {
                    mostrarPremio('¡Has ganado 15 créditos!');
                    saldo += 15; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[2] && simbolosActuales[b].substring(22) == combinaciones[2] && simbolosActuales[c].substring(22) == combinaciones[2]) {
                    mostrarPremio('¡Has ganado 20 créditos!');
                    saldo += 20; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[3] && simbolosActuales[b].substring(22) == combinaciones[3] && simbolosActuales[c].substring(22) == combinaciones[3]) {
                    mostrarPremio('¡Has ganado 25 créditos!');
                    saldo += 25; // Asigna el premio
                } else if (simbolosActuales[a].substring(22) == combinaciones[4] && simbolosActuales[b].substring(22) == combinaciones[4] && simbolosActuales[c].substring(22) == combinaciones[4]) {
                    mostrarPremio('¡Has ganado 30 créditos!');
                    saldo += 30; // Asigna el premio
                }
            }

            // Mostrar el premio al usuario
            actualizarSaldo();
            gano = true;
        }
        // Función para mostrar el modal de premio
        function mostrarPremio(mensaje) {
            premioMensaje.textContent = mensaje;
            premioModal.style.display = 'block';
        }

        // Cerrar el modal de premio al hacer clic en la 'X'
        closePremioBtn.addEventListener('click', () => {
            premioModal.style.display = 'none';
        });

        // Cerrar el modal de premio al hacer clic fuera del modal
        window.addEventListener('click', (event) => {
            if (event.target === premioModal) {
                premioModal.style.display = 'none';
            }
        });
    });

    // Si no hubo ganancia, remover cualquier borde verde previo
    if (!gano) {
        celdas.forEach(celda => celda.classList.remove('ganadora'));
    }
}

// Función para mostrar el premio en la interfaz
function mostrarPremio(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}

// Función para girar las celdas
function girarCeldas() {
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => celda.classList.add("animando"));

    let interval = setInterval(function () {
        celdas.forEach(celda => {
            let randomIndex = Math.floor(Math.random() * simbolos.length);
            let imgSrc = simbolos[randomIndex];
            celda.innerHTML = ""; // Limpiar la celda
            let img = document.createElement("img");
            img.src = imgSrc;
            img.style.width = "20%";  // Ajustar el tamaño de la imagen
            celda.appendChild(img);
        });
    }, 100);

    setTimeout(function () {
        clearInterval(interval);
        celdas.forEach(celda => celda.classList.remove("animando"));

        // Verifica la ganancia después de que el giro termine
        verificarGanancia();
        actualizarSaldo();
    }, 2000);
}