import fs from "fs"
import { json } from "stream/consumers";

const path = "./files/usuarios.json"

export default class ManagerUsuarios{
    consultarUsuarios = async () => {
        if(fs.existsSync()){//tratar de leer si existe el archivo
            const data = await fs.readFile(path, "utf-8");
            console.log(data);
            const users = json.parse(data)
            return users
        }else{
            return []
        }
    }
    crearUsuarios = async (info)=> {
        const users = await this.consultarUsuarios()
        if(users.length === 0){
            info.id = 1
        }else{
            info.id = users[users.length-1].id + 1
        }
        users.push(info)
        await fs.promises.writeFile(path, JSON.stringify(users, null, "\t"))
        return info
    }
}








const manager = new ManagerUsuarios();


const env = async() =>{
    let primeraConsultaUsuarios = await manager.consultarUsuarios();
    console.log(primeraConsultaUsuarios); //Debe devolver vacío
    let user = {
        nombre:"Mauricio",
        apellido:"Espinosa",
        edad:26,
        curso:"Backend"
    }
    let result = await manager.crearUsuarios(user);
    console.log(result); //Debe devolver al usuario con un id
    let user2 = {
        nombre: "mariano",
        apellido: "rigo",
        edad: 22,
        curso: "backend"
    }
    let result2 = await manager.crearUsuarios(user2)
    console.log(result2)
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios); //Debe devolver al usuario instertado
}
env();