let misNombres = "Pedro-Luis-Ana-Rosa-Angel";
const nombresArray = misNombres.split("-");
//El método String.split() divide una cadena en partes separadas por un delimitador
//y las coloca en un array. (Le pasamos el guión ya que está el String separado por guiones)
document.getElementById("string-el").innerHTML = `String: ${misNombres}`;
document.getElementById("array-el").innerHTML = `Array: ${nombresArray}`;