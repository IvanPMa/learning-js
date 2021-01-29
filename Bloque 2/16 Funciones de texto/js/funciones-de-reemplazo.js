'use strict'

//Transformacion de textos

var numero = 444;
var texto1 =" Este es el primer texto de ejemplo javascript ";
var texto2 = "Este esel segundo ejemplo de texto";
//Remplazo de una palabra
var busqueda = texto1.replace("javascript","python");
//Permite separa un string a partir de una carater
var busqueda2 = texto1.slice(5,22);
//Pasa la cadena a array usando " " como separador
var busqueda3 = texto1.split(" ");

//trim borra los espacios del inicio y al final del texto
var busqueda4 = texto1.trim();

console.log(busqueda);
console.log(busqueda2);
// console.log(busqueda3);
console.log(texto1);
console.log(busqueda4);

