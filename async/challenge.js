import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Primer concepto
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

// Segundo concepto con try catch
const anotherFunction = async(urlAPI) => {
    try { // Si hay response
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[100].id}`);
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);

        console.log(products);
        console.log("Titulo del producto: " + product.title);
        console.log("Nombre de la categoría: " + category.name);
    } catch {
        console.log(error);
    }
}

anotherFunction(API);