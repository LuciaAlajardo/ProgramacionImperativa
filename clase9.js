const prompt = require("prompt-sync")({sigint:true});
// 1º 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. .

let pedirUnaFrase = prompt("Ingrese su frase 😌 ")
console.log(pedirUnaFrase);

// 2º Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación..

let preguntarElNombre = prompt ("Ingrese su nombre  ")
console.log("Hola " + preguntarElNombre + " !! 👋🏻 ");

// 3º Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

let primerNumero = parseInt(prompt ("Ingrese el primer numero a sumar "))
let segundoNumero = parseInt(prompt ("Ingrese el segundo numero a sumar "))

let resultado = primerNumero + segundoNumero; 
console.log("El resultado de la suma es " + resultado);

// 4º Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años".

let pedirFecha = parseInt(prompt("Ingrese un año de nacimiento "))
let añoActual = parseInt(prompt("Ingrese el año actual "))
let cantidadDeAnio = añoActual - pedirFecha;
console.log("Su edad es " + cantidadDeAnio);

// 5º Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1,11));

function numeroSecerto (numero){
    if (numero == getRandomInt (1,11)) { // para que haga aleatorio desde el 1 al 10, pero para que lo cuente al 10, pongo el 11.
        console.log("Felicidades, has acertado 👏🏻👏🏻")
    } else {
        console.log("Lo lamento, no acertaste 😢😢")
    }
}
let adivina = parseInt(prompt("Ingresa el numero que queres adivinar "))
numeroSecerto (adivina);

// 6º Escribí un programa que imprima los números pares del 0 al 100.

function imprimirElNumerPar(){
    for (let i = 0; i <=100; i++) {
        let resultado = 0;
        resultado = 2 * i;
        console.log(resultado);
    }
}
imprimirElNumerPar();


// 7º Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

const nombres = ['Pedro', 'Pablo', 'Maria', 'Juan', 'Diana']
//console.log(nombres.length);// muestra la cantidad de elementos 
//console.log(nombres); //para que muestre todos, solo llamar a la variable.
function miArreglo(array){
    for (let i = 0; i< array.length; i++) {
        console.log(array [i]);
    }
}
miArreglo(nombres);

// 8º Construí un pseudocódigo que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

function porcentaje(numero){
    if (numero > 500) {
        resultado = numero * 0.18;
        console.log(resultado);
    } else {
        console.log("No se puede sacar el porcentaje de este numero ");
    }
}porcentaje(200);

// 9º Escribí una función llamada elemento que recibe un arreglo como parámetro. La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.

let nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];//el mostrado es elemento 2
let nombres2= ["Lucy","Theo"];

function elemento(array){
    let comparacion = array.length;
    console.log (comparacion)
    if (comparacion >= 3) {
        return console.log(array [2]);
    }
    else{
        return console.log(-1)
    }
}
elemento(nombres);
elemento(nombres2);


