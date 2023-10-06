//Declaramos la cadena
const cadena = "Centro Estudios Aula Campus";
document.getElementById("cadena-el").innerHTML = `Cadena: ${cadena}`;
//En ambos casos primero almacenamos en una constante el índice, o bien de la palabra
//o bien de la letra. Este índice se lo pasaremos a la función String.substring()
const indiceEstudios = cadena.indexOf("Estudios");
const subcadenaEstudios = cadena.substring(indiceEstudios);
document.getElementById("subcadenaEstudios-el").innerHTML = `Subcadena 'Estudios': ${subcadenaEstudios}`;

const indiceD = cadena.indexOf("d");
const subcadenaD = cadena.substring(indiceD);
document.getElementById("subcadenaD-el").innerHTML = `Subcadena 'd': ${subcadenaD}`;

//String.substring(): Devuelve una subcadena en base a un índice de inicio pasado
//como parámetro.