let sueldo;
let horas;
let dia;

//Función sencilla con switch clásico. Verificamos que el número entre en el rango deseado (1-7)
//Del 1 al 5 se multiplicará por 15 y en default (que solo puede ser 6 o 7) se multiplicará por 20.
function cantidadAPagar() {
    horas = prompt("Introduzca las horas trabajadas.");
    horas = parseFloat(horas);
    dia = prompt("Por favor introduzca el número correspondiente al día trabajado (Lunes-> 1, Martes-> 2, Miércoles-> 3, Jueves-> 4, Viernes-> 5, Sábado-> 6, Domingo-> 7)");
    dia = parseInt(dia);
    if (dia > 7 || dia < 1 || isNaN(dia)) {
        document.getElementById("sueldo").innerHTML = "Por favor introduzca el número correspondiente al día trabajado (Lunes-> 1, Martes-> 2, Miércoles-> 3, Jueves-> 4, Viernes-> 5, Sábado-> 6, Domingo-> 7)";
        return;
    } else {
        switch (dia) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                sueldo = horas * 15;
                break;
            default:
                sueldo = horas * 20;
                break;
        }
    }
    document.getElementById("sueldo").innerHTML = `Cantidad a pagar: ${sueldo}`;
}
cantidadAPagar();