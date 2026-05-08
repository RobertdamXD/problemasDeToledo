function operar(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    const result = (base * altura)/2;
    document.getElementById("result").textContent = "El resultado es: " + result;
};