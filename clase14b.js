const prompt = require("prompt-sync")({ sigint: true });

const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3.253,40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3.229,45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1.360,19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3.627,12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1.616,52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1.408,68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
    ]

//a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function edadesMenores(array){

    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < 30) {
            nuevoArray.push (array[i]);
        }
    }
    return nuevoArray;
}
//let edadMen = edadesMenores(arrayCuentas);
//console.log(edadMen);

// 2º Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

function edadesMayores(array){

    let nuevoArrayMayor = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular >= 30) {
            nuevoArrayMayor.push (array[i]);
        }
    }
    return nuevoArrayMayor;
}
//let edadMay = edadesMayores(arrayCuentas);
//console.log(edadMay);

// 3º Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

function edadesIgual(array){

    let nuevoArrayIgual = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular === 30) {
            nuevoArrayIgual.push (array[i]);
        }
    }
    return nuevoArrayIgual;
}
//let edadIgual = edadesIgual(arrayCuentas);
//console.log(edadIgual);

// 4º Obtener la cuenta con el titular de la misma más joven.

function masJoven (array){
    let menor = array[0].edadTitular;
    let cuentaSeleccionada=array[0]
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < menor) {
            menor = array[i].edadTitular;
            cuentaSeleccionada = array[i];
        }
        
    }return cuentaSeleccionada;
}
//let obteMenor = masJoven(arrayCuentas);
//console.log(obteMenor); 

// 5º Obtener un nuevo array por cada tipo de cuenta.

function tipoDeCuenta(array){
    let cuentaCorriente =[];
    let cuentaSueldo = [];

    for (let i = 0; i < array.length; i++) {
        
        if (array[i].tipoCuenta === "sueldo") {
            cuentaSueldo.push (array[i]);
        } else {
            cuentaCorriente.push (array[i]);
        }   
    }
    return [cuentaCorriente, cuentaSueldo];
}
//let tipo = tipoDeCuenta(arrayCuentas);
//console.log(tipo);

// 6º Obtener un nuevo array con las cuentas habilitadas.

function habilitadas (array) {
    let habilitada = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada === true){
            habilitada.push (array[i]);
        }
    }
    return habilitada;
} 
//let cuentasHabilitadas = habilitadas(arrayCuentas);
//console.log(cuentasHabilitadas);

// 7º Obtener un nuevo array con las cuentas deshabilitadas.

function deshabilitadas (array) {
    let deshabilitada = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada === false){
            deshabilitada.push (array[i]);
        }
    }
    return deshabilitada;
} 
//let cuentasDeshabilitadas = deshabilitadas(arrayCuentas);
//console.log(cuentasDeshabilitadas);

// 8º Obtener la cuenta con el menor saldo.

function menorSa(array){

    let menorSaldo= (array[0].saldo);
    let menorCuenta= array[0];

    for (let i = 0; i< array.length; i++) {
        
        if ( (array[i].saldo)< menorSaldo) {

            menorSaldo=array[i].saldo;
            menorCuenta=array[i]; 
        } 
    }
    return menorCuenta
}

//let prueba= menorSa (arrayCuentas);
//console.log (prueba);

//9º Obtener la cuenta con el mayor saldo.

function mayorSaldo (array){

    let saldoMayor = array[0].saldo;
    let mayorCuenta = array[0];

    for (let i = 0; i < array.length; i++) {

        if (array[i].saldo > saldoMayor) {
            saldoMayor = array[i].saldo;
            mayorCuenta = array[i];
        }
    } return mayorCuenta;
}
let resultado = mayorSaldo(arrayCuentas);
console.log(resultado);