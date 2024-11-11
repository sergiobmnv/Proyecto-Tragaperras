
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
                    "Creditos"
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
                    "Credits"
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

    });

}