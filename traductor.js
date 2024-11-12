
i18next.init({
    lng:'es',
    resources:{
        es:{
            translation:{
                responsabilidad:
                    "Juega con Responsabilidad +18",
                depositar:
                    "Depositar",
                retirar:
                    "Retirar",
                combinaciones:
                    "Combinaciones",
                creditos:
                    "Creditos",
                botonCambiarIdioma:
                    "Cambiar Idioma",
                saldoSaldo:
                    "Saldo",
                creditoSaldo:
                    "Creditos",
                apuestaTraductor:
                    "Apuesta",
                creditoTraductos:
                    "Creditos",
                girarBtn:
                    "Girar",
            }
        }, 
        en:{
            translation:{
                responsabilidad:
                    "Play Responsibly +18",
                depositar:
                    "Deposit",
                retirar:
                    "Withdraw",
                combinaciones:
                    "Combinations",
                creditos:
                    "Credits",
                botonCambiarIdioma:
                    "Change Language",
                saldoSaldo:
                    "Balance:",
                creditoSaldo:
                    "Credits",
                apuestaTraductor:
                    "Bet:",
                creditoTraductos:
                    "Credits",
                girarBtn:
                    "Spin",
            }
        },
    }
});

function traducir() {
    const nuevoIdioma = i18next.language === 'es' ? 'en' : 'es';

    i18next.changeLanguage(nuevoIdioma, function(err, t) {
        
        document.getElementById("+18").innerHTML = t('responsabilidad');
        document.getElementById("depositarBtn").innerHTML = t('depositar');
        document.getElementById("retirarBtn").innerHTML = t('retirar');
        document.getElementById("Posiblescombinaciones").innerHTML = t('combinaciones');
        document.getElementById("creditos").innerHTML = t('creditos');
        document.getElementById("creditos1").innerHTML = t('creditos');
        document.getElementById("creditos2").innerHTML = t('creditos');
        document.getElementById("creditos3").innerHTML = t('creditos');
        document.getElementById("creditos4").innerHTML = t('creditos');
        document.getElementById("evento").innerHTML = `${t('botonCambiarIdioma')} <span class="bandera"></span>`;
        document.getElementById("saldoSaldo").innerHTML = t('saldoSaldo');
        document.getElementById("creditoSaldo").innerHTML = t('creditoSaldo');
        document.getElementById("apuestaTraductor").innerHTML = t('apuestaTraductor');
        document.getElementById("creditoTraductos").innerHTML = t('creditoTraductos');
        document.getElementById("girarBtn").innerHTML = t('girarBtn');

        // Alternar la bandera
        const bandera = document.querySelector('.bandera');
        if (nuevoIdioma === 'en') {
            bandera.classList.add('bandera-inglesa');
        } else {
            bandera.classList.remove('bandera-inglesa');
        }
    });
}
