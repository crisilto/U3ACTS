//Declaramos un array con unos pocos trabajadores de tipo objeto.
//Hago uso de tantas comas por el estilo "trailing comma", para volver el código más sencillo
//reduciendo posibles errores al añadir o quitar trabajadores.
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas

let misTrabajadores = [
    {
        nombre: "Raúl",
        apellidos: "González González",
        sueldo: 2100,
        fechaAlta: new Date("2005-08-17"),
    },
    {
        nombre: "Cristina",
        apellidos: "Silvestre Silvestre",
        sueldo: 1800,
        fechaAlta: new Date("1997-12-13"),
    },
    {
        nombre: "Josep",
        apellidos: "Soriano Soriano",
        sueldo: 2600,
        fechaAlta: new Date("1947-01-24"),
    },
];

//Función simple a la que le pasaremos como parámetros fechaAlta y sueldo
//Con sentencias if nos aseguramos que, dependiendo de la fechaAlta, tenga el trabajador
//un porcentaje de retención u otro.
function calcularRetencion(fechaAlta, sueldo){
    const añoAlta = fechaAlta.getFullYear();
    let retencion = 0;

    if(añoAlta < 1980){
        retencion = sueldo * 0.2;
    }else if(añoAlta >= 1980 && añoAlta <= 2000){
        retencion = sueldo * 0.15;
    }else{
        retencion = sueldo * 0.05;
    }
    return retencion;
}

//Creamos la variable resultado donde almacenar la información de todos los trabajadores.
let resultado = "";
//Recorremos el array con un for of
//Declaramos como constante a cada trabajador con su retención y accedemos a sus atributos.
//Guardamos en la variable resultado.
for(const trabajador of misTrabajadores){
    const retencion = calcularRetencion(trabajador.fechaAlta, trabajador.sueldo);
    resultado += `- ${trabajador.nombre} ${trabajador.apellidos}: Retención ${retencion}€ <br>`;
}
//Para mostrar en el HTML los datos, establecemos "resultado" como el contenido de nuestro párrafo 
document.getElementById("retencion").innerHTML = resultado;