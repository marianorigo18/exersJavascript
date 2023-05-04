//codigo asincrono no siempre se va a ejecutar en un orden 
//de arriba hacia abajo

//codigo asincrono se sale de la linea de ejecucion normal
//sin para el codigo sincrono

function saludar(){
    console.log("Hello World")
}

function sumar (a,b, callback){
    let result = a + b;
    callback(result)
}

function mostrarResult(result){
    console.log(`El resultado es ${result}`)
}

sumar(1,2, mostrarResult)