const prompt = require("prompt-sync")({ sigint: true });
/*
function totalAPagar(vehiculo,litrosConsumidos) {

    //En esta parte, dependiendo el tipo de vehiculo, determino cuanto tengo que pagar (litrosConsumidos*precio)
    if (vehiculo=="coche") {
        resultado=litrosConsumidos*86
    } else {
        if (vehiculo=="moto") {
            resultado=litrosConsumidos*70
        } else { //en este caso es autobus (porque no es coche ni moto)
            resultado=litrosConsumidos*55
        }
        
    }
    console.log(resultado); //muestro el resultado para saber si voy bien
    
    //A continuación me fijo el recargo segun la cantidad de litros consumidos

    if (litrosConsumidos>0 && litrosConsumidos<25) {
        resultado2=resultado+50;
    } else {
        resultado2=resultado+25;
    }
    console.log (resultado2);
}

totalAPagar("autobus", 20); //Pruebo y veo si esta bien
*/


console.log ("1) pollo ($150)");
console.log ("2) carne ($200)");
console.log ("3) veggie ($100)");

let eleccion1= prompt ("Elija un tipo de sandwich. Debe colocar el numero del menú: ");

if (eleccion1=="1") {
    a=150;
    console.log ("Selecciono sandwich de pollo");
} else {
    if (eleccion1=="2") {
        a=200;
        console.log ("Selecciono sandwich de carne");
    } else {
        a=100;
        console.log ("Selecciono sandwich veggie");
    }
    
}

console.log ("1) blanco ($50)");
console.log ("2) negro ($60)");
console.log ("3) s/gluten ($75)");
let eleccion2= prompt (" Seleccione el tipo de pan deseado ");

if (eleccion2=="1") {
    b=50;
    console.log ("Selecciono el pan blanco");
} else {
    if (eleccion2=="2") {
        b=60;
        console.log ("Selecciono el pan negro");
    } else {
        b=75;
        console.log ("Selecciono el pan /gluten");
    }
    
}
resultado=a+b;

let queso=prompt ("Desea queso? s/n ");
if (queso=="s") {
    ques=true;
} else {
    ques=false;
}

let tomate=prompt ("Desea tomate? s/n ");
if (tomate=="s") {
    tom=true;
} else {
    tom=false;
}

let lechuga=prompt ("Desea lechuga? s/n ");
if (lechuga=="s") {
    lec=true;
} else {
    lec=false;
}

let cebolla=prompt ("Desea cebolla? s/n ");
if (cebolla=="s") {
    ceb=true;
} else {
    ceb=false;
}

let mayonesa=prompt ("Desea mayonesa? s/n ");
if (mayonesa=="s") {
    may=true;
} else {
    may=false;
}
let mostaza=prompt ("Desea mostaza? s/n ");
if (tomate=="s") {
    mos=true;
} else {
    mos=false;
}
console.log ("Hasta ahora el resultado es: "+ resultado);

ques==true ? res1=resultado+20 : res1=resultado
tom==true ? res2=res1+15 : res2=res1
lec==true ? res3=res2+10 : res3=res2
ceb==true ? res4=res3+15 : res4=res3
may==true ? res5=res4+5 : res5=res4
mos==true ? res6=res5+5 : res6=res5

console.log ("Debe abonar " + res6);



/*
function aleatorio(numeroPorUsuario) {
    
}
*/
/*function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

function aleatorio (numero){
    if (numero== getRandomInt(1,11)) {
        console.log("Ha acertado el valor")
    } else {
        console.log("No ha acertado. Intente de nuevo")
    }
}
aleatorio(3);*/
