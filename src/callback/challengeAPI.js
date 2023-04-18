// Se instala el modulo XMLHTTPREQUEST desde npm install xmlhttprequest
// Se importa el modulo y se crea la variable de la API que se utilizara

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

// Funcion principal que obtiene informacion del producto como un objeto
function fetchData(urlAPI, callback) {

    // Inicializa un objeto de tipo XMLHttRequest
    let xhttp = new XMLHttpRequest();

    //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
    xhttp.open("GET", urlAPI, true);

    // En este metodo Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
    xhttp.onreadystatechange = function(event) {

         //el atributo readyState define el estado del objeto XMLHttpRequest
        //0 No inicializado
        //1 Loading
        //2 ejecutado
        //3 interactuando
        //4 completado
        if (xhttp.readyState === 4) {

            //si la respuesta de la API es exitosa (200 Ok)
            if(xhttp.status === 200) {

                  //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
                //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error" + urlAPI);
                return callback(error, null);
            } 
        }
    }

    xhttp.send();
}

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);

     //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
     fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if (error2) return console.log(error2);
        fetchData(`${API}/categories/%{data2?.category.id}`, function (error3, data3) {
            if (error3) return console.log(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
     })
})