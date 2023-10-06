let barraTareasEl = document.getElementById("barra-tareas-el");
let resolucionEl = document.getElementById("resolucion-el");

const alturaPantalla = window.screen.height;
const alturaVisiblePantalla = window.innerHeight;
const alturaBarraTareas = alturaPantalla - alturaVisiblePantalla;
barraTareasEl.innerHTML = `Píxeles barra de tareas: ${alturaBarraTareas}`;

const resolucionMayor = window.screen.width > 1024 && window.screen.height > 768 ? "Si" : "No";

resolucionEl.innerHTML = `Resolución superior a 1024 x 768: ${resolucionMayor}`;