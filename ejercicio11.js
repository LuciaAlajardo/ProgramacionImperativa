/*
let numbers =[22, 33, 54, 66, 72]
console.log([numbers.length]);

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penelope Glamour", "Pierre Nodoyuna","Paton" ]
console.log(grupoDeAmigos[5])

let str = "un string cualquiera";
let arrayAleatorio= ["Digital", "House", true, "string", 123,"false", 54, str
] 
console.log([arrayAleatorio.length]);

*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function experimento(array){

    for (let i = 0; i < array.length; i++) {
        array[i]=array[i].toUpperCase();
        
    }
    return array

}
variable1=experimento(peliculas);
console.log(variable1);