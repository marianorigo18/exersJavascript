const express = require("express")

const app = express()

const usuarios = [
    { id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25, genero: "m" },
    { id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23, genero:  ""},
    { id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30, genero:  "m"},
  ];

  app.get("/", (req, res)=> {
    res.send({usuarios})
  })

  app.get("/:usuario", (req, res) =>{
    let idUsuario = req.params.usuario
    let usuario = usuarios.find(user => {
        return user.id == idUsuario
    })
    res.send(usuario)
  })

  app.listen(8080, ()=>{
    console.log("funcionando");
  })

//const { application } = require("express");
// const express = require("express");

// const app = express();

// const usuarios = [
//   { id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25 },
//   { id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23 },
//   { id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30 },
// ];

// app.get("/", (req, res) => {
//   res.send( usuarios );
// });

// app.get("/:idUsuario", (req, res) => {
//   let idUsuario = req.params.idUsuario;

//   let usuario = usuarios.find((user) => {
//     return user.id == idUsuario;
//   });

//   res.send( usuario );
// });

// app.listen(8080, ()=> console.log('servidor levantado'))