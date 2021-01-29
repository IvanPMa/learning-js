
var numero = 444;
var texto1 = "primer texto prueba , segunda vez de prueba";
var texto2 = "Segundo texto prueba";


//Encuentra la primer coincidencia con la palabra dentro de un string
// var busqueda = texto1.search("prueba");
var busqueda = texto1.indexOf("prueba");
var busqueda2 = texto1.lastIndexOf("prueba");
var busqueda3 = texto1.match("prueba");
var busqueda3 = texto1.match(/prueba/g);
var busqueda4 = texto1.substr(13,6);
console.log(typeof busqueda3);
console.log(busqueda4);
