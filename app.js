// Función que se ejecuta al hacer clic en un botón de idioma
document.getElementById("idioma-es").addEventListener("click", function() {
    cambiarIdioma('es');
});

document.getElementById("idioma-gl").addEventListener("click", function() {
    cambiarIdioma('gl');
});

document.getElementById("idioma-en").addEventListener("click", function() {
    cambiarIdioma('en');
});

// Función para cargar el archivo JSON correspondiente al idioma seleccionado
function cambiarIdioma(idioma) {
    fetch(`locales/${idioma}.json`)  // Obtiene el archivo JSON de la carpeta 'locales'
        .then(response => response.json())  // Convierte el archivo a JSON
        .then(data => {
            actualizarContenido(data);  // Llama a la función para actualizar los textos de la página
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));  // Muestra errores si no puede cargar el JSON
}

// Función para actualizar el contenido de la página con los datos del archivo JSON
function actualizarContenido(data) {
    document.getElementById("titulo").innerText = data.titulo;  // Actualiza el título de la página
    document.getElementById("descripcion").innerText = data.descripcion;  // Actualiza la descripción de la página
}
