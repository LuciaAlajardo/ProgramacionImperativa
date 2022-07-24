const prompt = require("prompt-sync")({ sigint: true });

//1º ejercicio DENTRO DE UNA FUNCION ESTA EN CLASE DE MIERCOLES 3º SEMANA

let edad = (parseInt(prompt("Ingrese su edad ")))
if (edad<0) {
    //console.log ("edad invalidad")
}else {
    if(edad < 18) {
        //console.log("No puede pasar al bar.")
    } else if (edad < 21){
        //console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
        //console.log("Puede pasar al bar y tomar alcohol.")
        if (edad == 21) {
            //console.log ("Felicidades. Ha llegado a la mayoría de edad")
        }
    }
        
    let resto=edad%2;
    if (resto !=0) {
        //console.log ("Tu edad es impar")
    } else {
        //console.log ("Tu edad es par")
    }
}

//2º ejercicio total a pagar 

function totalAPagar (vehiculo,litrosConsumidos){
    if (vehiculo == "coche") {
        resultado = litrosConsumidos * 86
    }
    else if (vehiculo == "moto") {
        resultado = litrosConsumidos * 70
    }
    else {
        resultado = litrosConsumidos * 55
        
    }
    console.log ("Hasta ahora el resultado es "+ resultado);
    
    if (litrosConsumidos <= 25) {
        resultadoFinal = resultado + 50        
    } else {
        resultadoFinal = resultado + 25
    }
    console.log("El resultado final es " + resultadoFinal);
}
totalAPagar("coche",50);

//2 º ejercicio, el del sandwich

function totalDelSandwich(tipoDeSandwich, tipoDePan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    if (tipoDeSandwich == "pollo") {
        baseDeSandwich = 150
    } else if(tipoDeSandwich== "carne"){
        baseDeSandwich = 200
    } else {
        baseDeSandwich = 100
    }
    //console.log (devolucion);
    
    if (tipoDePan == "blanco") {
        pan = 50
    } else if (tipoDePan == "negro") {
        pan = 60
    }else {
        pan = 75
    }
    //console.log(pan);

    switch (queso) {
        case "true":
            q=20
            break;
    
        case "false":
            q=0
            break;
    }
    //console.log (q);

    switch (tomate) {
        case "true":
            t =15
            break;
    
        case "false":
            t =0
            break;
    }
    //console.log (t);

    switch (lechuga) {
        case "true":
            l =10
            break;
    
        case "false":
            l =0
            break;
    }
    //console.log (l);

    switch (cebolla) {
        case "true":
            c =15
            break;
    
        case "false":
            c =0
            break;
    }
    //console.log (c);

    switch (mayonesa) {
        case "true":
            may=5
            break;
    
        case "false":
            may=0
            break;
    }
    //console.log (may);

    switch (mostaza) {
        case "true":
            mos =5
            break;
    
        case "false":
            mos =0
            break;
    }
    //console.log (mos);
    resultadoFinal=baseDeSandwich+pan+q+t+l+c+may+mos;
    console.log ("El resultado final es: " + resultadoFinal);

}

let sandwich1 = prompt("Inglese su tipo de sandwich ")


let pan1 = prompt("Inglese su tipo de pan ")
let queso1 = prompt("Ingrese true o false, si quiere queso ")
let tomate1 = prompt("Ingrese true o false, si quiere tomate ")
let lechuga1 = prompt("Ingrese true o false, si quiere lechuga ")
let cebolla1 = prompt("Ingrese true o false, si quiere cebolla ")
let mayonesa1 = prompt("Ingrese true o false, si quiere mayonesa ")
let mostaza1 = prompt("Ingrese true o false, si quiere mostaza ")

totalDelSandwich(sandwich1,pan1,queso1,tomate1,lechuga1,cebolla1,mayonesa1,mostaza1 );

// 3º ¿cual es el numero secreto?

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1,11));

function numeroSecerto (numero){
    if (numero == getRandomInt (1,11)) {
        console.log("Felicidades, has acertado 👏🏻👏🏻")
    } else {
        console.log("Lo lamento, no acertaste 😢😢")
    }
}
console.log(numeroSecerto(2));


// 4º abrir paracaidas

function abrirParacaidas(velocidad, altura){
    let paracaidas = velocidad >1000;
    let paracaidas2 = altura >=2000 && altura< 3000;
    if (paracaidas > 1000) {
        console.log("¡¡¡El paracaidas se tiene que abrir ✅!!!")
        
    } else {
        console.log("¡¡El paracaidas debe estar cerrado ❌ !!")
    }
    console.log(paracaidas);
    console.log (paracaidas2);
}
abrirParacaidas(900,2500);

// atura >= 10 mayor o ==
//altura < 100 && altura >10 menor a y mayor
// altura < 100 && vel >= 900
//altura > 100 || vel < 50

//5º switch

let stringUno = 'genio';

switch (stringUno) {
    case 'casa':
        console.log("Home 🏠 ");
        break;
    
    case 'perro':
        console.log("Dog 🐶 ");
        break;
    
    case 'pelota':
        console.log("Ball ⚽️ ");
        break;
    
    case 'genio':
        console.log("genius 🧞‍♂️ ");
        break;

    default:
        console.log('Palabra ingresada inválida ❌');
        break;
}
// 2º ejercicio de switch

let valoracionDePelicula = 'Muy mala'

switch (valoracionDePelicula) {
    case 'Muy mala':
        console.log("Lamentamos su valoración 🥺");
        break;

    case 'Mala':
        console.log("Lamentamos su valoración 😔");
        break;

    case 'Mediocre':
        console.log("Lamentamos su valoración ☹️");
        break;

    case 'Buena':
        console.log("Agradecemos tu valoración 😊");
        break;

    case 'Muy buena':
        console.log("Agradecemos tu valoración ☺️");
        break;
        
    default:
        break;
}