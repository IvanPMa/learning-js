'use struct'

//Funciones anonimas
//Es una función que no tiene nombre
// var pelicula = function(nombre){
//     return "La pelicula es: "+nombre;
// }
// console.log(pelicula("Volver al futuro"));

function sumame(numero1, numero2, sumaYmuestra, sumaPordos){
    var sumar = numero1+numero2;
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es ",dato);
},//funcion flecha sirve exactamente igual que una función anonima
dato =>{
    console.log("La suma por dos es: "+(dato*2));
});
