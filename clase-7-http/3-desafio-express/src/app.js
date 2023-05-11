const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send(`<h1 style="color:red;">hello</h1>`)
})
app.get("/nombre/:nombre", (req, res)=>{
    res.send(`<h1 style="color:red;">hello</h1>`)
})

app.get("/usuario", (req, res) => {
    res.send({
        nombre: "juan", 
        apellido: "martinez",
        edad: 20,
        correo: "marianowagnerrigo@gmail.com"
    })
})

app.listen(3001, ()=>{
    console.log("esccuhando")
})