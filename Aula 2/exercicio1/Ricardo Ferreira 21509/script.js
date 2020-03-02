function lerInput() {
    var texto = document.getElementById("numero").value;
    if(!texto.length){
        alert("Texto vazio!");
    }
    else{
        document.getElementById("texto").innerText=texto;
    }


}