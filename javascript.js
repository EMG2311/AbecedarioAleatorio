const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var indice;
var abecedario1=abecedario;
function aleatorio(){
    var a=document.getElementById("letra");
    indice=Math.floor(Math.random() * abecedario1.length);
    a.value=abecedario1[indice];
    abecedario1=eliminar(abecedario1,abecedario1[indice]);
    if(abecedario1.length==0){
        a.value="Se usaron todas las letras"
    }
}

function reiniciar(){
    abecedario1=abecedario;
}

function eliminar(array, elemento) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== elemento) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
