let matriz = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

/*function sumaYResta(array){
    let suma = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (numers) {
                
            }
            
        }
        
        
    }
}
*/
function sumaNumeros(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]>=10 && matriz[i][j]<1000) {
                suma += matriz[i][j]; 
            }
        }
    }return suma; 
}

let resultado = sumaNumeros(matriz);
console.log(resultado);