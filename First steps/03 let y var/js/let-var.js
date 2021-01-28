'use strict'
//alert("Prueba script");
console.log("Prueba con var");
var numero = 40;
console.log(numero);
 if(true){
    var numero = 50;
    console.log(numero);//valor 50
 }
console.log(numero); //valor 50

console.log("Prueba con let");
var texto = "Aprendo JS";
console.log(texto); //Aprendo JS

if(true){
    let texto ="Aprendo PHP";
    console.log(texto); //Aprendo PHP
}

console.log(texto); //Aprendo JS