'use strict'
var categorias=['Accion', 'Terror','Comedia'];
var peliculas =['La verdad duele', 'La vida es bella', 'Gran torino','hola mundo'];
//ordenar un array
// peliculas.sort();
peliculas.reverse();
console.log(peliculas);

var cine = [categorias, peliculas];
// cine.forEach((elemento)=>{
//     document.write("<br>"+elemento);
// });

// console.log(cine[0][1]);
// console.log(cine[1][2]);
/*
do{
var elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
    // if(elemento != "ACABAR")
    //     peliculas.push(elementoguasoel);
    if(elemento == "ACABAR")
        peliculas.pop();
}while(elemento != "ACABAR");
*/
var indice = peliculas.indexOf("Gran torino");
// console.log(indice);
if (indice > -1){
    // El split en un array nos indica cuantos indices a partir de ese queremos borrar
    peliculas.splice(indice,1);
}
// peliculas.push("Batman");
// El join convierte a un array a un string separados por comas
var peliculas_string = peliculas.join();
var cadena ="texto1, texto2, texto2";
var cadena_array = cadena.split(", ");
console.log(cadena_array);
console.log(peliculas_string);