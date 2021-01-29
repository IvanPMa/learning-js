
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
var busqueda5 = texto1.charAt(15);
//starts with busca al inicio del String la palabra
var busqueda6 = texto1.startsWith("primer");
var busqueda7 = texto1.endsWith("segunda vez de prueba");
//buscar la palabra 
var busqueda8 = texto1.includes("segunda");
console.log(typeof busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log("Esta la palabara: ",busqueda7);