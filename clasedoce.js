const prompt = require("prompt-sync")({ sigint: true });

//ahora creo un array que contiene tres objetos
let familia= [
    {
        nombre:"Lucia",
        apellido: "Alajardo",
        cuenta: 10,
    },

    {
        nombre:"Valentin",
        apellido: "Skinder",
        cuenta: 10,
    },

    {
        nombre:"Theo",
        apellido: "Perruno",
        cuenta: 5,
    }
];
//ahora vamos a crear un objeto modificador de parametros del array de objetos anterior

const modificador= {

    personas:familia,
    
    Consultar: function (nombreConsulta) {

        let mensajeError="No se encontro la persona";
        let encontrado;

        for (let i = 0; i < this.personas.length; i++) {
            if (this.personas[i].nombre===nombreConsulta) {
                console.log (encontrado=this.personas[i]);
            }
            
        }

        return encontrado ? encontrado : mensajeError;

}
}

modificador.Consultar("Lucia");



/*
console.log(familia[0].nombre);
console.log(familia[1].apellido);
console.log(familia[2].cuenta);
*/
