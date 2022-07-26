const prompt = require("prompt-sync")({ sigint: true });

// 1º Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
//a. nombre
//b. apellido
//c. camada
//d. esParcial (VERDADERO)

let estudiante = {
    nombre : "Lucia",
    apellido : "Alajardo",
    camada : 5,
    esParcial : true
}

/*1º b Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 

NOTA < 4 : desaprobado
4 <= NOTA < 7 : debe rendir examen final
NOTA >= 7 : promocionado.
La función deberá retornar la condición final del alumno (solo retorna la palabra).
Al momento de llamar a la función, deberás mostrar la siguiente frase:
“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]”*/

function pasarNota (nota){
    if(nota <4){
        mensaje = "Desaprobado ";
    }else if(nota >=4 && nota <7){
        mensaje = "Debe rendir examen final ";
    }else {
        mensaje= "Promocionado";
    }
    return mensaje;
}
nota=8
console.log("El alumno obtuvo una nota igual a " + nota + " por lo tanto su condicion es: " + pasarNota(nota));

/* 2º Crea 1 array llamado clase. 
Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros.

Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
a. Agrega estos 3 objetos al array llamado clase.
b. Imprimir el array para ver que contenga esos objetos.*/

let clase = [];

let primerEstudiante = {
    nombre : "Esteban",
    apellido : "Piazza",
    bimestre : 1
}

let segundoEstudiante = {
    nombre : "Leandro",
    apellido : "Borrelli",
    bimestre : 2
}

let tercerEstudiante = {
    nombre : "Martín",
    apellido : "Cejas",
    bimestre : 3
}

clase.push (primerEstudiante);
clase.push (segundoEstudiante);
clase.push (tercerEstudiante);

console.log(clase);

/*Crea una función que reciba el array clase como parámetro e incremente en 1 el número
de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una
estructura de repetición.
Deberás hacer el correcto llamado de la función mostrando el array clase antes y
después de llamar a siguienteCursada.*/

function siguienteCursada(array){
    for (let i = 0; i < array.length; i++) {
        array[i].bimestre = array[i].bimestre + 1;
    }
    return array;
}
let resultado = siguienteCursada(clase);
console.log(resultado);

/* 3º Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su
progreso completo en PlayGround (true, false). 
Para ello deberán:
- Crear una constante asistenciaMinima que almacene el número mínimo de
asistencias permitidas para la aprobación de la materia, en este caso serán
23 asistencias mínimas.
- La función deberá recibir como parámetros la cantidad de asistencias y la
condición final ante PlayGround del alumno.
- Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su
progreso final está completo. Si alguna de estas opciones no se cumple, el
alumno será automáticamente desaprobado.
- Deberá retornar un string aprobado o desaprobado según corresponda */

const asistenciaMinima = 23;

function validarAlumno(cantidadAsistencia, condicionPg){

    if (cantidadAsistencia > asistenciaMinima && condicionPg === true){
        mensaje = "aprobado";
    }
    else{
        mensaje = "desaprobado";
    }
    return mensaje;
}
let prueba = validarAlumno(2,false);
let prueba2 = validarAlumno(30, false);
console.log(prueba);
console.log(prueba2);

