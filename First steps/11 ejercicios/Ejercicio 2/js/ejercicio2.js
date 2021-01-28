'use strict'
//Programa que compara dos numeros
var numero;
var media= 0, suma=0, contador=0;
do{
    numero = parseFloat(prompt("Ingrese un numero hasta que metas uno negativo"));
    if(isNaN(numero)){
        numero=0;
    }
    
    else if (numero>=0){
        suma+=numero;
        contador++;
    }
    
}while(numero>=0)
media = suma/contador;
alert("Números ingresados: "+contador+"\nSuma: "+suma+"\nMedia:"+media);
