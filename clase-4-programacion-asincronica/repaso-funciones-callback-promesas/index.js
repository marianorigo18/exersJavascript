/* 
objetivos de la clase
-   repasar funciones en javascript
-   comprender un callback y como se
    relaciones con estos 
-   usa promesas en javascript
-   concretar la diferencia entre 
    programacion asincronica y 
    programacion sincronica.
*/

//funciones 

function fTradicional(param){
    return param
}

const fAnonima = (param) => {
    return param
}

//Porque querriamos reasignar una funcion?
/*
ejecutarla una sola vez, no se almacenan en memoria
*/


//callback
//Un callback es una funcion como cualquier otra
//con la diferencia que esta se para como parametro 
//dentro de otra funcion.

//usando map
const arreglo = [1,2,3,4,5]
arreglo.map((element) => {
   // console.log(element / 2)
})

const saludo = (nombre, saludarqueseutilizaracomocallback) =>{
    saludarqueseutilizaracomocallback(nombre)
}
const saludar = (nombre) => {
    //console.log(`hola como te va ${nombre}`)
}
saludo("mariano", saludar)

//ejemplo de callback con sumas

const suma = (a,b, callF) => {
    const result = a + b
    callF(result)
}
const mostrarResultado = (result) => //console.log(`el resultado es igual a ${result}`)

suma(1,2, mostrarResultado)

const sumaTwo = arreglo.map((elem) => elem + 1)

//console.log(sumaTwo)

const myFMap = (arreglo, callback) => {
    let nuevoArreglo = []
    for(let i = 0; i < arreglo.length; i++){
        let nuevoValor = callback(arreglo[i])
        arreglo.push(nuevoValor)
    }
    return nuevoArreglo
}

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject("no se puede devidir entre 0")
        }else{
            resolve(dividendo/divisor)
        }
    })
}

dividir(4,0)
.then(response => {
    //console.log(response)
})
.catch(err => {
    //console.log(err)
})

new Promise(function(resolve, reject){
    setTimeout(()=> resolve(2), 1000)
})
.then(result => {
    //console.log(result)
    return result * 2
}).catch(err => console.log(err))
.then(result => {
    //console.log(result)
    return result * 2
})
.then(result => {
    //console.log(result)
    return result * 2
})
//codigo sincronimo
//console.log(1)
//console.log(2)
//console.log(3)
//codigo asincronimo
//console.log(4)
//setTimeout(()=> console.log(5), 1000)
//console.log(6)

function funA(){
    console.log(1)
    funB()
    console.log(2)
}
function funB(){
    console.log(3)
    funC()
    console.log(4)
}
function funC(){
    console.log(5)
}
funA()