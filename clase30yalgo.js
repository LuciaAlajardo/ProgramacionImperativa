let matriz1= [[1,2,3],[4,5,6],[7,8,9]]
console.table(matriz1)

function diago1(matriz){
    let multiplicacion=1;
    for (let i=0; i< matriz.length; i++) {
        multiplicacion= multiplicacion*matriz[i][i]
    }
    return multiplicacion;
}
let resultado = diago1(matriz1)
console.log(resultado);