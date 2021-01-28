'use strict'
//Programa que nos dice si un numero es par o inpar
do{
    var numero = parseInt(prompt("Ingresa un numero:: "));
} while(isNaN(numero));

if(numero%2==0){
    console.log(numero +" es par");
}
else{
    console.log("Es inpar");
}
