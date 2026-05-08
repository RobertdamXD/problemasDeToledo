function operar(){
    let birthyear = parseFloat(document.getElementById("birthyear").value);
    let actualyear = parseFloat(document.getElementById("actualyear").value);
    const result = actualyear - birthyear;
    document.getElementById("result").textContent = "El resultado es: " + result;
}