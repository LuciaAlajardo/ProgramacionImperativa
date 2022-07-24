
const cuentas =
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



function ordenar(array) {
    nuevoArray=array;
    for(let c=0 ; c<array.length ; c++){
        for(let i=0 ; i<array.length - 1; i ++){
            if(array[i].edadTitular > array[i+1].edadTitular){ //aca esta para que sea desc
    
                let temporal = array[i].edadTitular;
                array[i].edadTitular = array[i + 1].edadTitular;
                array[i + 1].edadTitular = temporal;
            }
    edadTitular
    
    return array;
    
}
}
}

console.log (ordenar(cuentas));
