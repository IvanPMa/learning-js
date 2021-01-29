'use strict'

//Transformacion de textos

var numero = 44;
console.log(typeof numero);
var texto1 = "esto es una variable";
var texto2 = "Segundo texto";

var dato = numero.toString();
dato = texto1.toUpperCase();
console.log(dato);
dato = texto2.toLowerCase();
console.log(dato);

//Calcular longitud de un texto
//Cuando es undefined es por que no es texto
var nombre = numero.toString();
console.log(nombre.length);

//Array

var nombre = ["hola","como","estas"];
console.log(nombre.length);

//Concatenar
// var textoTotal = texto1+texto2+numero;

var textoTotal = texto1.concat(" "+texto2+" "+numero);
console.log(textoTotal);