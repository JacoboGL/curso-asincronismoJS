function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 5, suma));

// SET TIMEOUT

setTimeout(() => {
    console.log("Hola JS!")
}, 2000);