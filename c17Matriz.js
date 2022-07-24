function crearMatriz(){
    let matriz = [];
    let filas =[];

    for (let i= 0; i <=5; i ++){
}

}


function primerEjercicio(numero){
    for (let i = numero; i <=numero + 10; i++) { 
        console.log("probando " + i);
    }
}//para que funcione, hay que escribir el nombre del parametro en todos lados.

console.log(primerEjercicio(5));


const creandoMatriz1 = [["Fede", "Lucy", "Agu", "Santi"], ["Bauti", "Mateo", "Zoe", "Ciro"]];

console.table(creandoMatriz1[0][3]);

// Primero vamos a crear una matriz de 2x2 con Js.
const creandoMatrizZ = [[10, 5], [20, 14]];

console.table(creandoMatrizZ);

// 2 ¿Cómo accedo al valor almacenado en 1-1?

const creandoMatrizz = [[10, 5], [20, 14]];

console.table(creandoMatrizz [1][1]);

// 3 ¿Cómo puedo cambiar el valor almacenado en 1-0?

const creandoMatriz = [[10, 5], [20, 14]];

creandoMatriz[1][0]=45; //para modificar de forma individual un valor de la matriz

for (let i = 0; i < creandoMatriz[1].length; i++) {
    creandoMatriz[1][0]=45;
    
}

console.table (creandoMatriz);

// 4 Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?

let matrizNoCuadrada = [[23, 11, 5, 77],[2, 55, 6,13]];
console.table(matrizNoCuadrada);

// 5 Imprimo todos los numeros por columna

for (let columna = 0; columna < matrizNoCuadrada[0].length; columna++) {
    for (let fila = 0; fila < matrizNoCuadrada.length; fila++) {
        console.log (matrizNoCuadrada[fila][columna]);
    }
    
}

//6 Imprimo todos los numeros por fila

for (let fila = 0; fila < matrizNoCuadrada.length; fila++) {
    for (let columna = 0; columna < matrizNoCuadrada[fila].length; columna++) {
        console.log (matrizNoCuadrada[fila][columna]);
    }
    
}

// EJERCICIO DE SALITA

/*Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos 
Luego, escribe un algoritmo para sumar todos los numeros en la matriz.*/



let matrizCincoXCinco = [
    [16, 8, 94, 27],
    [28, 2, 8, 33],
    [21, 10, 10, 11],
    [17, 8, 4, 17],
    [3, 3, 22, 20]
];

function sumarLaMatriz(array) {
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            resultado += array[i][columna]; //lo que tenes guardado en resultado, sumalo que hay en esta posicion [i][columna] es lo mismo que hacer: resultado = resultado + array[i][columna];
        }
        
    }
    return resultado;
    
}
console.log(sumarLaMatriz(matrizCincoXCinco));





// 1 Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números. 

const matrixBuilder = () => { //funcion de tipo arrou
    let res = [];
    
for (let i = 0; i <= 90; i += 10) {
    let aux = [];
    for (let j = 1; j <= 10; j++) {
    if (i === 0) {
    aux.push(j);
    } 
    else {
    aux.push(i + j);
    }
    }
    res.push(aux);
}
    return res;
};
console.table(matrixBuilder());

function matriz() {
    let total = [];

    for (let fila = 0; fila <= 40; fila+= 10) {
        let ayu = [];
        for (let columna = 1; columna <= 10; columna++) {
            if (fila === 0) {
                ayu.push(columna);
            }else{
                ayu.push(fila + columna);
            }
        }
        total.push(ayu);
    }
    return total;
}
console.table(matriz());

//3 Por último, vamos a generar dos funciones: 
//a) Una va a sumar los valores en la diagonal marcada en rojo. 


let matriz = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29,30],
    [31, 32,33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47, 48, 49, 50]
];

function sumaDeDiagonal(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            if (i===columna) { // si fila es = a columna que sume, en este caso el primer nro es 0.0...
                suma += matriz[i][columna];
            }
        }
    } 
    return suma;
}
console.table(matriz);
console.log(sumaDeDiagonal(matriz));

//b) La otra va a marcar los valores de la diagonal secundaria marcada en verde.
// opcion nro 2
let matriz = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29,30],
    [31, 32,33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47, 48, 49, 50]
];

function sumaDeDiagonalVerde(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            if (i + columna === 9) { 
                resultado += matriz[i][columna];
            }
        }
    } 
    return resultado;
}

console.log(sumaDeDiagonalVerde(matriz));


function sumaDeDiagonalVerde(array) {
    for (let fila = 0; fila < array.length; fila++) {
        for (let columna = 0; columna < array[fila].length; columna++) {
            if (fila + columna == array.length -1) {
                sumaDeDiagonalVerde += array[fila][columna];
            }
        }
    } 
}
console.log(sumaDeDiagonalVerde(matriz));

//opcion nro 1

function sumaDeDiagonalVerde(array) {
    for (let fila = 0; fila < array.length; fila++) {
        for (let columna = array[fila].length -1; columna >=0 ; columna--){
            if (fila + columna == array.length -1) {
                sumaDeDiagonalVerde += array[fila][columna];
            }
        }
    } 
    return sumaDeDiagonalVerde;
}
console.log(sumaDeDiagonalVerde(matriz));
