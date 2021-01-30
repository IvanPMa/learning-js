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
/*
for(var i =0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}*/
//forEach(elemento, index, array)
// lenguajes.forEach((elemento, indice /*array*/)=>{
//     // console.log(array);
//     document.write("<li>"+indice+" - "+elemento+"</li>");
// });

for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje] +"</li>");
}
document.write("</ul>");