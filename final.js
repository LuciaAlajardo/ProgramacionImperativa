
// a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
// La variable alumnos contiene un OBJETO LITERAL, con tipo de datos STRINGS Y ENTEROS, y LA PROPIEDAD "NOTA", ES UN ARRAY. -- La variable "alumnos", debería estar en mayuscula ya que es un array declarado como constante. 

// b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?
// Las propieades que tiene el objeto alumnos es, ID, NOMBRE, APELLIDO, LEGAJO Y NOTAS.

const alumnos = [
{
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],},
{
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
},
{
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
},
{
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
},
{
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
},
] 

//2. Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*)

function ordenarAsc(array) {
    nuevoArray = array;
    for(let c = 0 ; c < array.length ; c++){
        for(let i=0 ; i<array.length - 1; i ++){
            if(array[i].legajo > array[i+1].legajo){ 
    
                let temporal = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temporal;
            }
        }
    }
    
    return array;
    
}

console.log (ordenarAsc(alumnos));


// ejercicio 2

// a. Crear un método que retorne el promedio de notas. (*)


let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9],
    promedio: function (){
        let suma = 0;
        let promedio = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];  
        }
        promedio = suma / this.notas.length;
        return promedio;
    } 
}

alumno.promedio()

//b. Crear una función que ordene las notas del alumno de forma descendente. (*)
function ordenarDesc(array) {

    for(let c=0 ; c<array.length ; c++){

        for(let i=0 ; i<array.length - 1; i ++){
            if(array[i] < array[i+1]){ 
    
                let temporal = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temporal;
            }
        }
    }
    return array;
}
console.log(ordenarDesc(alumno.notas));

// 2

// Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
let crearMatriz = [[10, 5, 3], [20, 14, 8], [2, 11, 7]] ;
console.table(crearMatriz);

// Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.

function multiplo(matriz) {
    let multiplotres = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let columna = 0; columna < matriz[i].length; columna++) {
            
            if (matriz[i][columna] % 3 == 0) { 
                resultado =matriz[i][columna];
                multiplotres.push(resultado);
            }
        }
    }
    return multiplotres;
    
}
console.log(multiplo(crearMatriz));

//Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.

function sumarLaMatriz(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            resultado += array[i][columna]; 
        }
        
    }
    if (resultado % 2 == 0) {
        let verdadero = true;
        return verdadero;
    }
    return "El resultado de la suma de la matriz no es par"
}
console.log(sumarLaMatriz(crearMatriz));

//D. Crear una función que retorne la suma de las diagonales de la matriz.
function sumaDeDiagonal(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        for (let columna = 0; columna < array[i].length; columna++) {
            if (i===columna) { 
                suma += array[i][columna];
            }
        }
    } 
    return suma;
}
console.log(sumaDeDiagonal(crearMatriz));