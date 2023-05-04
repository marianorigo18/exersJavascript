//fs sincrono
//almacenar fecha y hora
//crear archivo
//agregar fecha y hora actual 
//leer el contenido 
//mostrar el archivo
//utlizar sus operaciones y sus operaciones de tipos callback
const fs = require("fs")

const fecha = new Date().toLocaleDateString()
const hora = new Date().toLocaleString()

fs.writeFile("./fechayhora.txt", "fecha " + fecha + "hora " + hora, (error)=>{
    if(error) return console.log(error);

    fs.readFile("./fechayhora.txt", "utf-8", (error, result)=>{

        if(error) return console.log(error)
        console.log(result)
        
    })
})