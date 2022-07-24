const prompt = require("prompt-sync")({ sigint: true });
// 1º Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function primerEjercicio(numero){
    for (let i = numero; i <=numero + 10; i++) { 
        console.log("probando " + i);
    }
}//para que funcione, hay que escribir el nombre del parametro en todos lados.

console.log(primerEjercicio(5));

// 2º Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function segundoEjercicio(){
    for (let i = 5; i < 20; i+=3) {
        console.log (i);
        
    }
}
segundoEjercicio();

//3º Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
//SUMATORIA!!!!
function sumatoria(){ //SUMATORIA!!!! suma 1 + 2 + 3 + 4
    let contador = 1;
    let suma = 0;
    for (let i = 0; contador <= 100 ; i++) {
        suma = suma + contador;
        contador = contador +1;
    }
    return console.log(suma);
}
sumatoria();

// 4º Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(numero){
    let resultado = 1;
    for (let i = 1; i <= numero ; i++) {
        resultado = resultado *i; 
    }return resultado;
};
console.log(factorial(3));

// 5º Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function fibona(numero) { // suma, 1 + 1 = 2, 2 + 1, = 3, 3 + 2 = 5...
    let siguiente=1;
    let actual=0;
    let temporal=0;
    
    for (let i= 1; i <= numero; i++) {
        
        temporal = actual;
        actual = siguiente;
        siguiente = siguiente + temporal;
        console.log(actual)
    }
}

fibona(10);
