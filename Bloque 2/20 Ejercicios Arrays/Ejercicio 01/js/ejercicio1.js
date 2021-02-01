'use strict'
//1.Pide 6 numeros por pantalla y los meta en un array
// 2.Mostrar el Array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
//3.Ordenarlo y mostrarlo
//4.Invertir su orden y mostrarlo
//5.Mostrar cuantos elementos tiene el array
//Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
function mostrarArray(elementos){
    document.write("<h1>Contenido del Array</h1>");
    elementos.forEach((elementos)=>{
            document.write("<strong>"+elementos+"</strong><br/>");
    });

}
var numeros = [];
// var numeros = new Array();
for (var i=0; i<6;i++){
    // numeros[i]= parseInt(prompt("Ingresa un numero"));
    numeros.push(parseInt(prompt("Ingresa un numero")));
}
// document.write("<h1>Listado de numeros</h1>");
// document.write("<ul>");
// numeros.forEach((elementos)=>{
//     document.write("<li>"+elementos+"</li>");
//     console.log(elementos);
// });
// document.write("</ul>");
mostrarArray(numeros);
numeros.sort();
console.log(numeros);
numeros.reverse();
console.log(numeros);
console.log(numeros.length);
var valor = prompt("Busca valor: ");
var numeros_string = numeros.join();
console.log(numeros_string);
var busqueda = numeros_string.includes(valor);
var busqueda1 = numeros_string.indexOf(valor);
// console.log(busqueda);
if (busqueda == true){
    console.log("Si existe el valor dentro del array");
    console.log("su indice es: "+busqueda1);
}
else{
    console.log("No existe el valor dentro del array");
}