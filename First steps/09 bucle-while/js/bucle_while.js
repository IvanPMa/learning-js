"use strict"

//Bucle while

var year = 2021;
var anios = 0; 
while(year !=1997){
    console.log(year);
    year--;
    if (year!=1997)
        anios++;

    if (year==2000){
        break;
    }
}

console.log("Tienes "+anios+" años");

// Do while
var years=20;
do{
    alert("Solo cuando sea diferente de 25");
    years--;
}while(years > 25)