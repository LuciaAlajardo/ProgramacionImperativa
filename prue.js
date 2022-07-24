const prompt = require("prompt-sync")({ sigint: true });


let texto=prompt ("Ingrese su correo electronico: ");
comparar=texto.indexOf("@");
comparar2=texto.indexOf (".com");


while (comparar==-1, comparar2==-1) {
    
    console.log ("El correo es invalido");
    texto=prompt ("Ingrese su correo electronico: ");
    comparar=texto.indexOf("@");
    comparar2=texto.indexOf(".com");
    
}
console.log("Felicitaciones. Ingreso su mail")

// objetos literal
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantHora){
        this.energia=(this.energia - (cantHora * 5));
        this.experiencia=(this.experiencia + (cantHora * 2));
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

