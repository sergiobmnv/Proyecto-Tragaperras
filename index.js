

/* Funcion Modo Oscuro - Claro*/
const modoIcono = document.getElementById('modoIcono');
        const body = document.body;

        modoIcono.addEventListener('click', () => {
            // Alternar clase para el modo oscuro
            body.classList.toggle('modo-oscuro');
            
            // Cambiar el icono
            if (body.classList.contains('modo-oscuro')) {
                modoIcono.classList.remove('fa-sun');
                modoIcono.classList.add('fa-moon'); // Cambia a icono de luna
            } else {
                modoIcono.classList.remove('fa-moon');
                modoIcono.classList.add('fa-sun'); // Cambia a icono de sol
            }
});

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