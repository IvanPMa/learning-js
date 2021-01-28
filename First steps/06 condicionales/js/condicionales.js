"use strict"

//Condicional if

var edad = 70;
var ine = true;
var nombre = "David Suarez";

if (edad >= 18 && ine == true){
    console.log("El usuario: " +nombre +" es mayor de edad");

    if(edad <=33){
        console.log("todavia eres milenial");
    }
    else if(edad >=70){
        console.log("Eres mayor");
    }
    else{
        console.log("Ya no eres milenial");
    }
}

else {
    console.log("El usuario: "+nombre+ " es menor de edad");
} 
/* 
Operadores logicos
AND &&
OR ||
NOT !
*/ 

//Negación

var year = 2011;
if (year != 2018){
    console.log ("No es  2018, realmente es: "+year);
} 
//AND 
if (year >= 2000 && year <= 2022  &&year!=2021){
    console.log('Estamos en la era actual');
} else{
    console.log('Era post moderna');
}

//OR
if (year == 2011 || (year >= 2021 && year <= 2100)){
    console.log("El año termina en 1");
    console.log("Siglo XXI")
}
else{
    console.log("Año no registrado");
}