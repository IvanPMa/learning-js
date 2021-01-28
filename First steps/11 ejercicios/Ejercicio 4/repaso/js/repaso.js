'use strict'
do{
    var numero1= parseInt(prompt("Ingrese el primer número"));
    var numero2= parseInt(prompt("Introduce el segundo número"))
    if (isNaN(numero1) || isNaN(numero2))
        alert("Ingrese un número válido")
    else if(numero1 == numero2)
        alert("Los números son iguales no hay numeros en medio")
}while(isNaN(numero1) || isNaN(numero2) || numero2 == numero1);
var inicio;
var final
if(numero1 < numero2){
    inicio = numero1;
    final = numero2;
}
else{
    inicio = numero2;
    final = numero1;
}

document.write("Los numeros que hay entre "+inicio+" y "+final+ " son: <br>");
for(var i= inicio+1; i < final ; i++ ){
    document.write("<br>"+i);
}