function operar(){
    let distancia = parseFloat(document.getElementById("distancia").value);
    let velocidad = parseFloat(document.getElementById("velocidad").value);
    const result = distancia/velocidad;
    document.getElementById("result").textContent = "El Tiempo Total Es: " + result;
};