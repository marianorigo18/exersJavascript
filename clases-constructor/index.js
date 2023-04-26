const arreglo = [1,3,{name: "hello"}]

const mostrarElementos = arreglo => arreglo.length == 0 ? console.log("Array vacio") : arreglo.map(el => console.log(el))

mostrarElementos(arreglo)

class Person {
    constructor(name,apeliido,edad){
        this.name = name;
        this.apeliido = apeliido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola soy ${this.name}`)
    }
}

const persona1 = new Person("mariano", "rigo", 22)
persona1.saludar()