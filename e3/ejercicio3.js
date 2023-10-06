//Una primera función sencilla para generar un número entero de un dígito (de 0 a 9)
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10); 
}

function generarNumeroLoteria() {
    //La variable numeroPremiado tiene que ser inicializada porque la usaremos para
    //ir almacenando cada número, hasta llegar a 5, con un for.
    let numeroPremiado = ''; 
    for (let i = 0; i < 5; i++) { 
        numeroPremiado += generarNumeroAleatorio();
    }
    return numeroPremiado;
}

//Quería adornar poniendo la fecha actual
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();
const fechaActual = `${dia}/${mes}/${año}`;
//Generamos el número premiado, que primero irá a la función generarNumeroLoteria() 
//apoyándose en la función generarNumeroAleatorio()
const numeroPremiado = generarNumeroLoteria();

//Para mostrar en el HTML los datos, establecemos tanto "fechaActual" como "numeroPremiado"
//como el contenido de nuestros párrafos. 
document.getElementById("fechaHoy").innerHTML = `Hoy es ${fechaActual}!`;
document.getElementById("numeroPremiado").innerHTML = `NÚMERO PREMIADO: ${numeroPremiado}`;
