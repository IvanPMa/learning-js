function suma (numero1,numero2,mayor,menor){
    var resultado = numero1+numero2;
    mayor(numero1,numero2);
    menor(numero1,numero2);
    return resultado;
    
}


var numero1 = 2;
var numero2 = 10;

suma(numero1,numero2,function(numero1,numero2){
    if(numero1> numero2)
        console.log(numero1+" es mayor");
    else 
        console.log(numero2+" es mayor");
},
function(numero1,numero2){
    if(numero1< numero2)
    console.log(numero1+" es menor");
    else 
    console.log(numero2+" es menor");
});

