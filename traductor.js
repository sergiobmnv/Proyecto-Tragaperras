
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
                
            }
        },
    }
});




function traducir() {
    const nuevoIdioma = i18next.language === 'es' ? 'en' : 'es';

    //Funcion changeLanguage 
    i18next.changeLanguage (nuevoIdioma, function(err, t){
        document.getElementById("+18").innerHTML = t('responsabilidad');
        document.getElementById("depositarBtn").innerHTML = t ('depositar');
        document.getElementById("retirarBtn").innerHTML = t ('retirar');
        document.getElementById("Posiblescombinaciones").innerHTML = t('combinaciones');
        document.getElementById("creditos").innerHTML = t ('creditos');
        document.getElementById("creditos1").innerHTML = t ('creditos');
        document.getElementById("creditos2").innerHTML = t ('creditos');
        document.getElementById("creditos3").innerHTML = t ('creditos');
        document.getElementById("creditos4").innerHTML = t ('creditos');
        document.getElementById("evento").innerHTML = t ('botonCambiarIdioma');
        
    });

}