'use strict'
// Programa que muestra los numeros que estan entre los dos numeros ingresados por el usuario
do{
    var numero1 = parseInt(prompt("Numero  1: "));
    var numero2 = parseInt(prompt("Numero  2: "));
    if(isNaN(numero1)|| isNaN(numero2) ){
        alert("Ingrese numeros válidos");
    }
    else if(numero1 == numero2){
        alert("No hay números en medio, son iguales");
    }
}while(isNaN(numero1) || isNaN (numero2) || numero1== numero2);

if (numero1 < numero2){
    var inicio = numero1;
    var fin = numero2;
}
else{
    var inicio = numero2;
    var fin = numero1;
}
document.write("De: "+numero1+" a "+numero2+" estan estos números");
for(var i = inicio+1; i<fin;i++ ){
    document.write("<br>"+i);
}


