function operar(){
    let costo = parseFloat(document.getElementById("costo").value);
    let m3 = parseFloat(document.getElementById("m3").value);
    const result = costo * m3;
    document.getElementById("result").textContent = "El Pago Es De: " + result;
}
// Configuración para moneda (Ejemplo: Pesos Mexicanos o Dólares)
const formatoDinero = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN', // Usa 'USD' para dólares
});