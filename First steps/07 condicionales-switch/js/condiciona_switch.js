'use strict'
var numero1,numero2;
numero1 = prompt("Numero 1:");
numero2 = prompt("Numero 2:");

var opcion = prompt("¿Qué quieres hacer ? ");
switch( opcion){
    case 'suma':
        var res = Number(numero1)+Number(numero2);
    break;
    case 'resta':
        var res = Number(numero1)-Number(numero2); 
    break; 
    default:
        alert("Esa opcion no existe");
    break;

}

if (res <0){
    console.log("El resultado es negativo");
}

console.log("El resultado es: " + res);