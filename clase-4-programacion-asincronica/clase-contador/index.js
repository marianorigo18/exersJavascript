class Contador{
    constructor(responsable){
        this.responsable = responsable;
        this.contador = 0;
    }
    static contadorGlobal = 0;

    getResponsable = () => {
        return this.responsable
    }

    contar = () => {
        this.contador++
        Contador.contadorGlobal++
    }

    getContadorIndividual = () => {
        return this.contador
    }

    getContadorGlobal = () => {
        return Contador.contadorGlobal
    }
}

const cuenta1 = new Contador("mariano")
cuenta1.contar()
cuenta1.contar()

const cuenta2 = new Contador("marcelo")

cuenta2.contar()
console.log(cuenta2.getContadorIndividual());
console.log(cuenta2.getContadorGlobal());

// console.log(cuenta1.getContadorIndividual())
// console.log(cuenta1.getContadorGlobal())
//una variable static no lleva this
//leva el nombre de la clase.static
//ejemplo Contador.contadorGlobal, esto
//para hacer referencia