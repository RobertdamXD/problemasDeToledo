function operar(){
    let peso = parseFloat(document.getElementById("peso").value);
    let dolar = parseFloat(document.getElementById("dolar").value);
    const result = peso / dolar;
    document.getElementById("result").textContent = "El resultado es: " + result;
}