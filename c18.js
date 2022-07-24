/* Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.*/

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

function sumarMatriz(array) {
    let resultadoSuma = 0;
    for (let fila = 0; fila < array.length; fila++) {
        for (let columna = 0; columna < array[fila].length; columna++) {
            if (array[fila][columna] >= 10 && array[fila][columna]< 1000) {
                resultadoSuma += array[fila][columna];
            }
            
        }
    } return resultadoSuma;
}
console.log(sumarMatriz(numeros));

// 2
// a Lo que nos solicitan es dar el total de gastos en una semana. 
let mes = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

function totalDeSemana(array, fila) {
    let suma = 0;
    for (let i = 0; i < array[fila].length; i++) {
        suma += array[fila][i];
        
    }
    return suma;
}
console.log(totalDeSemana(mes,0));
console.log(totalDeSemana(mes,2));
console.log(totalDeSemana(mes,3));

// total de un día en particular

//un dia en particular.

let dia = mes [0][2]; // que se fije en la 1º fila, posicion 2.
console.log(dia);
// muestra los 2 dias de los arrays
function totalDelDia(array, dia) {
    estadistica=[];
    for (let i = 0; i < array.length; i++) {
        estadistica.push(array[i][dia])
        
    }
    return estadistica;
}

console.log(totalDelDia(mes,2));

// c Por último, es necesario tener el total de gastos realizados en el mes.

function totalDelMes(array) {
    let total = 0;
    for (let fila = 0; fila < array.length; fila++) {
        for (let columna = 0; columna < array[fila].length; columna++) {
            total += array[fila][columna];
            
        }
        
    }
    return total;
}
console.log(totalDelMes(mes));

// d Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.

function masGastos(array) {
    let semanaCero = 0;   
    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            switch (i) {
                case 0:
                    
                    break;
            
                default:
                    break;
            }
            
        }
        
    }
}

function mayorSemana(array) {
    let paraGuardar=[];
    let suma=0;
    let comparacion=0;

    for (let semana = 0; semana < array.length; semana++) {
        for (let dia = 0; dia < array[semana].length; dia++) {
            suma += array[semana][dia];
            
        }
        paraGuardar.push(suma)
    }
    for (let i = 0; i < paraGuardar.length; i++) {
        if (paraGuardar[i]> comparacion) {
            comparacion=paraGuardar[i];
            
        }
        
    }
    return comparacion;

}

console.log (mayorSemana(mes));