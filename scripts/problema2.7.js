function operar(){
    let costo = parseFloat(document.getElementById("costo").value);
    let Km = parseFloat(document.getElementById("Km").value);
    const result = costo * Km;
    document.getElementById("result").textContent = "El Costo Del Boleto Es: " + result;
};