const prompt = require("prompt-sync")({ sigint: true });

// 1º Escriban una función que reciba dos parámetros: un array y un índice. La función deberá de mostrar por consola el valor del elemento según el índice dado.

/*let ejercicio = [1,4,3,6,5,8];

function ejercitacion(array, indice){
    return array[indice];
}
console.log(ejercitacion(ejercicio,2));*/

// 2º Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—, por la palabra “fizzbuzz”.

function sustituto(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i + "fizz");
        }
        else if (i % 5 === 0){
            console.log(i + "buzz");
        }
        else if(i % 15 === 0){
            console.log(i + "fizzbuzz");
        }
        
    }
}


console.log(sustituto());