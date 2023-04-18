function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

// En cada iteración se va al siguiente valor
console.log(g.next().value);
console.log(g.next().value);

// Segundo ejemplo, se utiliza el asterisco para indicar que se trata de una funcion generadora
function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(["Jacobo", "Daniela", "Matias", "Hera", "Luna", "Sol", "Nieve"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);