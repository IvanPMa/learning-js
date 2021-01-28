'use strict'

// VARIABLES
// es un contenedor de informacion

// var define una variable global o local sin importar el ambito
//del bloque
var pais = "México";
var continente ="America";
var antiguedad = 2019;

let prueba = "hola";
// let permite definir variables limitando su alcance al bloque 
// donde se esta usando
alert (prueba);
pais = "España";
continente = "Europa"

console.log(pais, continente, antiguedad);
var pais_y_continente= pais+' '+continente;
// console.log(pais_y_continente);
alert(pais_y_continente);