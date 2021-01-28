'use strict'
// Programa que imprime todos los numeros pareo inpares que estan entre dos numeros ingresados por el usuario

do{
    var numero1= parseInt(prompt("Ingresa el primer número: "))
    var numero2= parseInt(prompt("Ingresa el segundo número: "));
}while(isNaN(numero1)|| isNaN(numero2)|| numero1==numero2);

if(numero1 < numero2){
    var inicio = numero1;
    var fin = numero2;
}

if (numero1 > numero2){
    var inicio = numero2;
    var fin = numero1;
}
document.write("Los números inpares que hay entre "+numero1+" y "+numero2+" son:  ");

for(var i = inicio; i< fin; i++){
    var par = i % 2;
    if(par == 1){
        document.write("<br>"+i);
    }
}