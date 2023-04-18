// Se crea una arrow function para la promesa

const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Asyncing!"), 2000)
            : reject(new Error("Error de asincronía!"));
    })
}

// Funcion para llamar la asincronia con async await

const anotherFunction = async () => {
    const awaiting = await asyncFunction();
    console.log(awaiting);
}

anotherFunction();