const promise = new Promise(function(resolve, reject) {
    resolve("Todo correcto");
});

// Ejemplo practico

const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve("Tienes las vacas necesarias para suplir la demanda!");
    } else {
        reject("No hay suficientes vacas :(");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})