let usuario = "user";
let contraseña = "123";
let accesoEl = document.getElementById("acceso-el");

function iniciarSesion() {
    let tuUsuario = prompt("Introduzca su usuario: ");
    if (usuario === tuUsuario) {
        let tuContraseña = prompt("Introduce contraseña: ");
        if (contraseña === tuContraseña) {
            accesoEl.innerHTML = `Acceso Permitido`;
        } else {
            alert("No se ha podido completar el Acceso.");
            accesoEl.innerHTML = `Acceso Denegado`;
        }
    } else {
        alert("No se ha podido completar el Acceso.");
        accesoEl.innerHTML = `Acceso Denegado`;
    }
}
