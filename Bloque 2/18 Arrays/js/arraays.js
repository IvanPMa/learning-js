'use strict'

//Arrays,arreglos,matrices
var nombres =["Ivan","Pacheco","Maldonado",true,52];
// console.log(nombres);
var lenguajes = new Array("php","js","java","c++","ruby","c#");
// console.log(lenguajes);
// var ubicacion= parseInt(prompt("Ubicacion en el Array",0));
// console.log(nombres.length);


// if(ubicacion < nombres.length && ubicacion>= 0){
//     console.log(nombres[ubicacion]);
// }
// else{
//     console.log("Ingresa un indice correcto");

// }
document.write("Listado de lenguajes");
document.write("<ul>");
for(var i =0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");