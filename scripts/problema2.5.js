function operar(){
    let cobro = parseFloat(document.getElementById("cobro").value);
    let m2 = parseFloat(document.getElementById("m2").value);
    const result = cobro * m2;
    document.getElementById("result").textContent = "El resultado es: " + result;
};