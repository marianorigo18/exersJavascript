//reforzando concepto de asincronia
//sincrono: 
//la siguiente instruccion depende de la anterior
// const datos = fortearDatos()
// almacenarDatos(datos)
//asincrono: (no bloqueante)
//no afecta al flujo principal


//ejemplo asincrono with settimeout
const temporizador = (callback) => {
    setTimeout(()=>{
        callback();
    },5000)
}

let operacion = () => console.log("realizando operacion")

console.log("iniciando operacion");

temporizador(operacion)

console.log("tarea finalizada")

//ejemplo sincrono

console.log("iniciando 1")
console.log("realizando operacion")

for(let contador = 1; contador <= 5; contador++){
    console.log(contador);
}
console.log("tarea finalizada")

//ejemplo asincrono con setinterval

