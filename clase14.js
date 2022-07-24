const prompt = require("prompt-sync")({ sigint: true });

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//1º Obtener en un nuevo array las edades menores a 18.

function edadMenor(array){
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < 18) {
            nuevoArray.push (array[i]);
        }
    }
    return nuevoArray;
}
//let prueba = edadMenor(edades);
//console.log(prueba);

// 2º Obtener en un nuevo array las edades mayor o igual a 18.

function edadMayor(array){
    let nuevoArrayMayor = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] >= 18) {
            nuevoArrayMayor.push (array[i]);
        }
    }
    return nuevoArrayMayor;
}
//let pruebaMayor = edadMayor(edades);
//console.log(pruebaMayor);

// 3º Obtener en un nuevo array las edades igual a 18.

function edadIgual(array){
    let nuevoArrayIgual = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === 18) { //me falta el ===
            nuevoArrayIgual.push (array[i]);
        }
    }
    return nuevoArrayIgual;
}
//let pruebaIgual = edadIgual(edades);
//console.log(pruebaIgual);

// 4º Obtener el menor.

function obtenerMenor(array){
    let menor = array[0];

    for (let i = 0; i < array.length; i++) {
        if(array[i] < menor){
            menor = array[i]; //ver el orden 
        }
    }
    return menor;
}
//let pruebaMenor = obtenerMenor(edades);
//console.log(pruebaMenor);

// 5º Obtener el mayor.

function obtenerMayor(array){
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > mayor){
            mayor = array[i];
        }
        
    }return mayor;
}
//let mayor = obtenerMayor(edades);
//console.log(mayor);

// 6º Obtener el promedio de edades.

function promedio(array){
    let suma=0
    let cantidadDeNro = array.length;
    for (let i = 0; i < array.length; i++) {
        suma= suma+array[i]
        
    }
    let resultadoPromedio = suma / cantidadDeNro;
    return resultadoPromedio;
}

//let pruebaProm=promedio (edades);
//console.log (pruebaProm);

// 7º Incrementar en 1 todas las edades.

function incrementar (array){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}
//let incremento = incrementar(edades);
//console.log(incremento);


