import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Controlador MIDI",
    "price": 50,
    "description": "25 teclas, pads de percusión y sliders de 8 canales",
    "categoryId": 1,
    "images": ["https://http2.mlstatic.com/D_NQ_NP_810438-MCO46926327506_072021-O.jpg"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));