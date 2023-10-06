//Usamos el objetio navigator.userAgent() para identificar el navegador.
//Además para hacerlo más sencillo le añadimos .toLowerCase() para así únicamente tener que buscar
//por la palabra en minúsculas.
const userAgent = window.navigator.userAgent.toLowerCase();
let tituloEl = document.getElementById("titulo-el");
let imagenEl = document.getElementById("imagen-el");
let textoEl = document.getElementById("texto-el");

//Condicionales sencillas, buscando en nuestra constante userAgent coincidencias con las palabras clave.
//Cuando lo haga, le pasamos a los párrafos del HTML su correspondiente contenido en consecuencia de qué
//navegador ha salido. Así como el icono y una breve descripción.
if (userAgent.includes("chrome")) {
    tituloEl.innerHTML = `<h2>Google Chrome</h2>`;
    imagenEl.innerHTML = `<img src="imgs/chrome.png" alt="Logotipo Chrome" width="40px">`;
    textoEl.innerHTML = `<p>Google Chrome es de los principales navegadores el más joven y el más popular actualmente.</p>`;
} else if (userAgent.includes("trident" || "msie")) {
    tituloEl.innerHTML = `<h2>Internet Explorer</h2>`;
    imagenEl.innerHTML = `<img src="imgs/internet-explorer.png" alt="Logotipo Internet Explorer" width="40px">`;
    textoEl.innerHTML = `
        <p>El navegador más utilizado tradicionalmente en internet. Es un complemento indispensable y por defecto del sistema operativo Windows, gracias al cual ha logrado su alto nivel de uso.</p>`;
} else if (userAgent.includes("firefox")) {
    tituloEl.innerHTML = `<h2>Mozilla Firefox</h2>`;
    imagenEl.innerHTML = `<img src="imgs/mozilla.svg.png" alt="Logotipo Mozilla Firefox" width="40px">`;
    textoEl.innerHTML = `<p>Mozilla Firefox, o simplemente Firefox es un navegador web libre y de código abierto desarrollado por Mozilla, una comunidad global que trabaja junta para mantener una Web Abierta, pública y accesible.</p>`;
} else if (userAgent.includes("opera")) {
    tituloEl.innerHTML = `<h2>Opera</h2>`;
    imagenEl.innerHTML = `<img src="imgs/opera.png" alt="Logotipo Opera" width="40px">`;
    textoEl.innerHTML = `<p>Es reconocido por su velocidad, seguridad, soporte de estándares (especialmente CSS), tamaño reducido y constante innovación.</p>`;
} else if (userAgent.includes("safari")) {
    tituloEl.innerHTML = `<h2>Safari</h2>`;
    imagenEl.innerHTML = `<img src="imgs/safari.svg.png" alt="Logotipo Safari" width="40px">`;
    textoEl.innerHTML = `<p>Es el complemento indispensable para los usuarios de Mac OS X, para donde fue ideado inicialmente que iba a ejecutarse y donde están la gran mayoría de usuarios que lo utilizan dentro de alrededor del 4% de usuarios en el mundo.</p>`;
} else if (userAgent.includes("edge")) {
    tituloEl.innerHTML = `<h2>Microsoft Edge</h2>`;
    imagenEl.innerHTML = `<img src="imgs/microsoft-edge.png" alt="Logotipo Microsoft Edge" width="40px">`;
    textoEl.innerHTML = `<p>Microsoft Edge es un navegador web desarrollado por Microsoft, que se encuentra incluido en Windows 10, reemplazando a Internet Explorer como navegador web preestablecido. Microsoft Edge está construido en torno a los estándares web, y Microsoft se ha comprometido a actualizar Edge para integrarlo con los nuevos y existentes estándares que aún no soporta..</p>`;
}
