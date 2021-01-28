'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

do{
    var numero = parseInt(prompt("Ingresa número: "));
}while(isNaN(numero));

for(var i=0 ; i<= 10; i++){
    console.log(numero +" x "+i+" = "+(numero*i))

}
//Tabla de todos los numeros

for(var j=0; j<=10; j++ ){
    document.write("<h1>Tabla del "+j+":</h1>");
    for (let i=0; i <=10 ; i++){
        document.write("<br>"+j+" x "+i+" = "+(j*i));
    }

}