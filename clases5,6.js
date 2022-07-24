const prompt = require("prompt-sync")({ sigint: true });

//Funciones y calculadoras
function test2(x,y){
    return x *2
    console.log(x); //todo lo que escribimos debajo del return no se ejecuta.
    return x/ 2;    //y la operación la hace, pero para que muestre, le tengo que poner un console fuera de la función. 
}
//let resultado = test2(10, 2);
//console.log(resultado);
//console.log(test2(10));
//1º ejercicio
function pasarAcentimetros(pulgada){
    return pulgada * 2.54; //aca me olvide de la coma
}
//let resultado2 = (pasarAcentimetros(10));
//console.log(resultado2);

// 2º ejercicio Crear una funci n que recibe un string y lo convierte en una URL.

function convertirAUnaUrl(nombre){
    //console.log("www." + nombre  + ".com")
}
convertirAUnaUrl("Lucia Alajardo");

// 3ºCrear una funcin que recibe un string y devuelve la misma frase pero con admiracion.

function completandoElString(saludar){
    //console.log("¡¡¡" + saludar + "!!!")
}
completandoElString("Hola que tal");

// 4º Crear una funcion que calcule la edad de los perros, considerand que 1 año para nosotro son 7 de ellos.

function calculandoEdadDePerro(edad){
    return edad * 7;
}
let calculando = (calculandoEdadDePerro(3));
//console.log (calculando);

// 5º crear una función que calcule el valor de tu hora de trabajo, introduciendotu saldo mensual como parametro. considerando que el mes tiene 40 hs trabajadas

function calculandoLaHora(sueldo){
    //return console.log(sueldo / 40);
}
//calculandoLaHora(50.000);

/* Crear la funcion calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la funci n
probando diferentes valores.
Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla
como funci n expresada y funci n flecha.*/

function calculandoIMC(alto,peso){
    //return console.log(peso / (alto ** 2));
}
//calculandoIMC(1.60, 70);

//7º Crear una funcion que recibe un string en minuscula, lo convierta a mayusculas, y lo retorne, .toUpperCase()

function pasandoAMayuscula(texto){
    //return console.log(texto.toUpperCase());
}
//pasandoAMayuscula("Una chica en el cielo Vive en mi océano salvaje");

// 8º  Crear una funcion que recibe un parametro y devuelve qu  tipo de dato es ese parametro.Pista: te servira  revisar qu  hace la palabra reservada typeof.

function queDatoEs(dato){
    return //console.log(typeof(dato)); //no es como el anterior, hay que escribir el parametro.
    
}
//queDatoEs("hola");

// 9º Crear una funci n que le pasamos el radio de un circulo y nos devuelve la circunferencia.

function sacarLaCircunferencia(radio){
    return //console.log(radio * 2 * 3.1416) //cosa a parte.
}
//sacarLaCircunferencia(5);

function investigando(radio){
    return //console.log(radio * 2 * Math.PI); // math.pi es el reemplazo de el nro incorrecto de pi
}
//investigando(5);

//calculadora.

// 1º Crear una funci n sumar, esta deber  recibir dos par metros y retornar la suma de los mismos.

function suma (sum1, sum2){
    return (sum1 + sum2);
}
//suma (5,5);
//let pedirNro = parseInt (prompt("Ingrese el primer número a sumar "));
//let pedir2Nro = parseInt (prompt("Ingrese el segundo número a sumar "));

//suma(pedirNro, pedir2Nro);


//restar

function restar(rest1, rest2){
    return (rest1 - rest2);
}
//restar(25,20);
//let pedirNro = parseInt (prompt("Ingrese el primer número a restar "));
//let pedir2Nro = parseInt (prompt("Ingrese el primer número a restar "));

//restar(pedirNro, pedir2Nro);
//multiplicar 

function multiplicar(multi1, multi2){
    return (multi1 * multi2);
}
//multiplicar(8,8);
//let pedirNro = parseInt (prompt("Ingrese el primer número a multiplicar "));
//let pedir2Nro = parseInt (prompt("Ingrese el primer número a multiplicar "));

//multiplicar(pedirNro,pedir2Nro);

//dividir 

function division(div1, div2){
    return (div1 / div2);
}
//division(100,5);

//let pedirNro = parseInt (prompt("Ingrese el primer número a dividir "));
//let pedir2Nro = parseInt (prompt("Ingrese el primer número a dividir "));

//division(pedirNro, pedir2Nro);


// calculadora III

// 1º Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

function cuadradoDeUnNumero(numero){
    let resultado =  (multiplicar (numero, numero));
    return //console.log(resultado);
}
//cuadradoDeUnNumero(2);

function aLaPotencia(base,potencia){
    let fruto = (base ** potencia); // escriir la base y la potencia en parametro para no tener que cambiar la potenciay la base siempre. 
    return //console.log(fruto);
}
//aLaPotencia(2,2);

// 2º Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro. Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. 

function promedioDeTresNumeros(prom1, prom2, prom3){
    let resultadosuma = (suma(prom1,prom2));
    let resultadoFinalSuma = (suma(resultadosuma, prom3)); //aca tuve que hacer dos variales para sumar porque en la funcion suma tenia solo doa parametros.
    
    let resultadoFinal = (division(resultadoFinalSuma, 3));
    //return console.log(resultadoFinal);
}
//promedioDeTresNumeros(5,7,8);

// 3º Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300. Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

function calcularPorcentaje(numTotal, porcentaje){
    let primerPaso = (division(porcentaje, 100)); //primero se divide al 100% y el resto lo multiplicamos por el % que queremos sacar, puede ser 15, 20...
    let segunPaso = multiplicar( numTotal, primerPaso);
    return //console.log(segunPaso)
}
//calcularPorcentaje(300, 15);

//4º Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo. Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.

function GeneradorDePorcentaje (porcentaje, total){
    let uno = (multiplicar (porcentaje, 100)); //en este caso cual es el 2% de 200,
    let dos = (division(uno, total));
    return console.log(dos)
}
GeneradorDePorcentaje(2,200);