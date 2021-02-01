//Pide 6 numeros por pantalla y los meta en un array
'use strict'
// console.log("Hola");
var numeros = new Array();
for (var i=0; i<6;i++){
    numeros[i]= parseInt(prompt("Ingresa un numero"));
}
document.write("<h1>Listado de numeros</h1>");
document.write("<ul>");
numeros.forEach((elementos)=>{
    document.write("<li>"+elementos+"</li>");
    console.log(elementos);
});
document.write("</ul>");