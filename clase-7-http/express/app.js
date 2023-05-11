const express = require("express")

const app = express()

app.get("/as", (req, res)=>{
    res.send("estas en la pagina de inicia")
})

app.get("/saludo", (req, res)=>{
    res.send("Hello from express")
})

app.listen(3001, ()=>{
    console.log("esccuhando")
})