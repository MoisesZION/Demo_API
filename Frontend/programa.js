// La dirección que se pone acá es la dirección local del PC, es decir url que esta alojada en el puerto 
// Frontend mínimo
let url= "http://127.0.0.1:8000/sumar";
let myAPI= url + "?a=5%b=45";

async function crearPeticion(){
    let response = await fetch(myAPI);
    let datos = response.json();
}

//Construir los parametros y construir lo que se solicita es lo necesario. 

