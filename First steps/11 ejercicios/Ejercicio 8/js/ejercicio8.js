'use strict'

do{
    var numero1 = parseFloat(prompt("Inserta el primer número"));
    var numero2 = parseFloat(prompt("Inserta el segundo número"));
}while(isNaN(numero1) || isNaN(numero2));

var opcion = parseInt(prompt("¿Que quieres hacer? \n1. Suma \n2. Resta \n3. Multiplicacion \n4. Division"));
var menu;
do{
     switch(opcion){
         case 1:
             var resultado=numero1+" + "+numero2+" = "+(numero1+numero2);
        break;
        case 2:
            var resultado=numero1+" - "+numero2+" = "+(numero1-numero2);
        break;
        case 3:
            var resultado=numero1+" * "+numero2+" = "+(numero1*numero2);
        break;
        case 4:
            var resultado=numero1+" / "+numero2+" = "+(numero1/numero2);
        break;
        default:
            alert("Opcion inválida o inexistente");
        break;
    }
    if (opcion<1 && opcion>4)
        menu=0;
    else 
        menu=1;
}while(menu==0);
alert(resultado);
document.write(resultado);
console.log(resultado);