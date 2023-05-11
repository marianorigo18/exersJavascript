const http = require("http")

const server = http.createServer((request, response) => {
    response.end("mi primer peticion")
})

server.listen(3000, ()=>{
    console.log("escuchando")
}) 