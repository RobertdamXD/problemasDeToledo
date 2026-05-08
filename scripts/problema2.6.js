function operar(){
    let A2 = parseFloat(document.getElementById("A2").value);
    let B2 = parseFloat(document.getElementById("B2").value);
    const result = A2 + B2;
    document.getElementById("result").textContent = "La Hipotenusa Es: " + result;
};