let arreglo = [24,13,59,87,5,63,14];


for(let z=0 ; z < arreglo.length ; z++){
                      // 7  - 1
for(let i=0 ; i < arreglo.length - 1   ; i++){
    if(arreglo[i] < arreglo[i+1]){

        let temporal = arreglo[i];
        arreglo[i] = arreglo[i+1];
        arreglo[i+1] = temporal;

    }
}

}


console.log(arreglo);



/* 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
*/

function realizarPiramide(){
    let string = "";
    for(let i= 1 ; i<= 6 ; i++){
        for(let j=1 ; j <= i ; j++){
    
                string += i;
        }
        string += "\n";

        
    }

    return string;
}

let linea = realizarPiramide();
console.log(linea);
