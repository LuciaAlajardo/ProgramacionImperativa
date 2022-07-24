let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.
let resultado;

if (num1 >= num2 && num1 >= num3) {
    resultado = num1;
} else if (num2 >= num1 && num2 >= num3) {
    resultado = num2;
} else {
    resultado = num3;
}

console.log("El mayor numero es" + resultado);