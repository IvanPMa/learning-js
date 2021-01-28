'use strict'
//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
//Definicion de la funcion

function porConsola(numero1, numero2){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta:  "+ (numero1 - numero2));
    console.log("Multiplicacion "+ (numero1 * numero2));
    console.log("Division " + (numero1 / numero2));
    console.log("----------------------------");
}
function porPantalla(numero1, numero2){
    document.write("Suma: "+ (numero1+numero2)+"<br>");
    document.write("Resta:  "+ (numero1 - numero2)+"<br>");
    document.write("Multiplicacion "+ (numero1 * numero2)+"<br>");
    document.write("Division " + (numero1 / numero2)+"<br>");
    document.write("----------------------------");

}
function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }
    else {
        porPantalla(numero1,numero2);
    }
    // return "Hola soy la calculadora";
    return true;
}
//Llamado de la funcion
// calculadora(12,22);

// for (var i =1 ; i <=10 ; i++){
//     console.log(i);
//     calculadora(i, 8);
// }

calculadora(1,4);

calculadora(2,2,true);