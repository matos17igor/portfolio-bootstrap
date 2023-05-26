function insert(num) {
   var numero = document.getElementById('resultado').innerHTML;
   document.querySelector('p#resultado').innerHTML = numero + num;
}

function clean (){
    document.querySelector('p#resultado').innerHTML = ""
}

function back (){
    var resultado = document.querySelector('p#resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.querySelector('p#resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }  else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}