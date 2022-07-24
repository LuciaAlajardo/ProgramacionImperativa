
const prompt = require("prompt-sync")({ sigint: true });

let misMascotas = [];

let gato = {
    nombre : 'Samuel',
    raza : 'siames',
    edad : 1,
    sonido : 'Miau',
    hacerRuido : function (){
        return this.sonido + this.sonido;
    }
}
let perro = {
    nombre : 'Gomez',
    raza : 'cruza calle con vereda',
    edad : 8,
    sonido : 'Guaf',
    hacerRuido : function (){
        return this.sonido + this.sonido;
    }
}

let pajaro = {
    nombre : 'plumin',
    raza : 'chingolo',
    edad : 13,
    sonido : 'pio pio',
    hacerRuido : function (){
        return this.sonido + this.sonido;
    }
}

misMascotas.push(gato);
misMascotas.push(perro);
misMascotas.push(pajaro);

//console.log(misMascotas);

// 3º Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

function aumentarEdad(array){
    for(let i=0; i < array.length; i++){
        array[i].edad = array[i].edad + 1;
    }
    return array;
}
//let misMascotasModificadas = aumentarEdad (misMascotas);
//console.log(misMascotasModificadas);

// 4º Ahora debemos crear otra función, que se llame aumentarEdad2, que va a hacer un trabajo más fino: 
//● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
//● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
//● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

function aumentarEdad2(array){
    for(i =0; i < array.length; i++){
        if(array[i].edad <6){
            array[i].edad = array[i].edad +1;
            
        }
        else if(array[i].edad >=6 && array[i].edad <=10 ){
            array[i].edad = array[i].edad + 2;
            
        }
        else{
            let mitad = (array[i].edad) / 2;
            array[i].edad = array[i].edad + mitad;
            
        }
    }
    return array;
}
let misMascotasModificadas2 = aumentarEdad2(misMascotas);
console.log(misMascotasModificadas2);

// 5º Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.*/

function identificador(array){
    for (i=0; i < array.length; i ++){
        array[i].identificador = i + 1; //AGREGAR UN DATO MAS AL OBJETO
    }
    return array
}
//let prueba = identificador(misMascotas);
//console.log(prueba);

// 6º Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los animalitos son iguales


function borrarRaza(array){
    for (i=0; i < array.length; i ++){
        delete array[i].raza;
    }
    return array //PARA ELIMINAR UN DATO AL OBJETO
}
let borrar = borrarRaza(misMascotas);
console.log(borrar);



