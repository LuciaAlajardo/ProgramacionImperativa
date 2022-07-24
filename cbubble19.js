//EJEMPLO 

let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

for (let i = 0; i < numeros.length; i++) {
	for (let j = 0; j < numeros.length; j++) {
		if (numeros[j] > numeros[j + 1]) {
			let temp = numeros[j];
			numeros[j] = numeros[j + 1];
			numeros[j + 1] = temp;
		}
	}
}
console.log(numeros);



//1º Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado.

const edades = [33, 27, 34, 30, 34, 25];

for(let c=0 ; c<edades.length ; c++){

    for(let i=0 ; i<edades.length - 1; i ++){
        if(edades[i]>edades[i+1]){

            let temporal = edades[i];
            edades[i] = edades[i + 1];
            edades[i + 1] = temporal;
        }
    }
}
console.log(edades);


//2 Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado.

for(let c=0 ; c<edades.length ; c++){

    for(let i=0 ; i<edades.length - 1; i ++){
        if(edades[i] < edades[i+1]){ //aca esta para que sea desc

            let temporal = edades[i];
            edades[i] = edades[i + 1];
            edades[i + 1] = temporal;
        }
    }
}
console.log(edades);


// 3 Dado un array de strings: ordenar el array anterior, alfabéticamente.


const letras = ['C', 'A','D','E','H','Z','J','L']

for(let c=0 ; c<letras.length ; c++){
    for(let i=0 ; i<letras.length - 1; i ++){
        if(letras[i]>letras[i+1]){

            let temporal = letras[i];
            letras[i] = letras[i + 1];
            letras[i + 1] = temporal;
        }
    }
}
console.log(letras);

//el mismo ejercicio de arriba
for (let i = 0; i < letras.length; i++) {
    for (let j = 0; j < letras.length -1; j++) { //aca hay que poner -1
        if (letras[j]> letras[j + 1]) { //y a partir de aca es todo el 2º for
            let abcd = letras[j];
            letras[j] = letras[j + 1];
            letras[j + 1] = abcd;
        }
        
    }
    
}
console.log(letras);




function ordenarCantantes(personas){ 
    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length-1; j++) {  
            if (personas[j].estatura > personas[j + 1].estatura) {
                let temp = personas[j];
                personas[j] = personas[j + 1];
                personas[j + 1] = temp;                
            }
        }    
    }
    return personas;        
};
ordenarCantantes(personas);

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    };        
};
imprimirArray(personas); 



//Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .
// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado , e.

const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
];


// a ordenar por saldo
function ordenarAsc(array) {
    nuevoArray=array;
    for(let c=0 ; c<array.length ; c++){
        for(let i=0 ; i<array.length - 1; i ++){
            if(array[i].saldo > array[i+1].saldo){ //aca esta para que sea ASc
    
                let temporal = array[i].saldo;
                array[i].saldo = array[i + 1].saldo;
                array[i + 1].saldo = temporal;
            }
        }
    }
    
    return array;
    
}

console.log (ordenarAsc(arrayCuentas));

// ordenar por edad

function ordenarEdad(array) {
    nuevoArray=array;
    for(let c=0 ; c<array.length ; c++){
        for(let i=0 ; i<array.length - 1; i ++){
            if(array[i].edadTitular > array[i+1].edadTitular){ //aca esta para que sea ASc
    
                let temporal = array[i].edadTitular;
                array[i].edadTitular = array[i + 1].edadTitular;
                array[i + 1].edadTitular = temporal;
            }
        }
    }
    
    return array;
    
}

console.log (ordenarEdad(arrayCuentas));