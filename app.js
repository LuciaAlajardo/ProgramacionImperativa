const prompt = require("prompt-sync")({ sigint: true });

/*function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
return "Mi nombre es Hernán";
}*/
/*let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco ());

let multiplicarPorDos = () => 123 * 2;
console.log(multiplicarPorDos());

let mostrarNombre = ()=> "Mi nombre es Hernán";
console.log(mostrarNombre());*/

function anterior (numero1){
    return numero1 - 1;
}
console.log(anterior (5));

function triple (numero2){
    return numero2 * 3;
}
console.log(triple (2))

function anteriorDelTriple (numero3){
    return anterior (triple (numero3))
}
let prueba = anteriorDelTriple (10);

console.log (prueba)
