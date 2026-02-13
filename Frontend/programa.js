// URL base del servidor local (backend corriendo en el puerto 8000)
let url = "http://127.0.0.1:8000/sumar";

// Construcción de la URL con parámetros (a y b se envían por query string)
let myAPI = url + "?a=5&b=45";

// Función asíncrona para hacer la petición al backend
async function crearPeticion(){

    // Realiza la petición HTTP al servidor
    let response = await fetch(myAPI);

    // Convierte la respuesta a formato JSON
    let datos = await response.json();

    // Muestra los datos en consola
    console.log(datos);
}

// Es necesario construir correctamente los parámetros
// y la URL para enviar los datos al backend.
