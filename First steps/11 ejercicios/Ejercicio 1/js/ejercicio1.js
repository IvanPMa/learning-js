// Programa que recibe dos numeros y dice cual es el mayor, menor o si son iguales
'use strict'
do{
    var numero1 = parseInt(prompt("Ingresa el número uno: "));
    var numero2 = parseInt(prompt("Ingresa el número dos: "));


    console.log(numero1,numero2);

    if (numero1 > numero2){
        alert("El numero: "+numero1+ " es mayor que: "+numero2);
    }
    else if(numero1< numero2){
        alert("El número: "+numero1+" es menor que: "+ numero2);
    }
    else if(numero1 == numero2){
        alert("Los números son iguales");
    }
    else{
        alert("Introduce un número válido");
    }
}while(numero1 <=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2))