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