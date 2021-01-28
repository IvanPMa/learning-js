'use strict'
do{
    var numero = parseFloat(prompt("Ingresa el número"));
}while(isNaN(numero))


for(var i=1 ; i<=numero; i++){
    if (numero%i ==0 )
        console.log(i);   
}