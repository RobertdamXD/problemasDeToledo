function operar(){
    let cobro = parseFloat(document.getElementById("cobro").value);
    let horas = parseFloat(document.getElementById("horas").value);
    const result = cobro * horas;
    document.getElementById("result").textContent = "El resultado es: " + result;
};