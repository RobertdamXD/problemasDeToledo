function operar(){
    let costo = parseFloat(document.getElementById("costo").value);
    let tiempo = parseFloat(document.getElementById("tiempo").value);
    const result = costo * tiempo;
    document.getElementById("result").textContent = "El Costo De La Llamada Es: " + result;
};