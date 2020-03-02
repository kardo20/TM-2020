var arrayNumbers = [];

function inserirNumero() {
    var numero = document.getElementById("numerosId").value;
    arrayNumbers.push(parseInt(numero));
    document.getElementById("adicionados").innerText = arrayNumbers.toString();
}

function calcularMaior() {
    var maiorNumero = Math.max.apply(Math, arrayNumbers);
    if (arrayNumbers.length > 4)
        document.getElementById("maior").innerText = maiorNumero;
    else
        alert("Adicione 5 números no mínimo!");
}