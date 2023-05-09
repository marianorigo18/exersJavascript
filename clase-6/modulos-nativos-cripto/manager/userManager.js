import fs from "fs"
import crypto from "crypto"

const path =  "./files/Usuarios.json";

export default class UserManager {
    getUsuarios = async () => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, "utf-8");
            const users = JSON.parse(data);
            return users;
        }else return [];
    }


    crearUsuarios = async (usuario) => {
        const usuarios = await this.getUsuarios();
        usuario.salt = crypto.randomBytes(128).toString("base64"); //salt: codigo secreto o numero unico
        usuario.contrasena = crypto.createHmac("sha256", usuario.salt).update(usuario.contrasena).digest("hex");
        usuario.push(usuario)
        await fs.promises.writeFile(path, JSON.stringify(usuarios, null, "\t"));
        return usuario
    }

    validarUsuario = async (username, contrasena) => {
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex(u => u.nombre_usuario === username)
        if(usuarioIndex === -1){
            console.log("no esta bro")
            return;
        }
        const usuario = usuarios[usuarioIndex]
        const newHash = crypto.createHmac("sha256", usuario.salt).update(contrasena).digest("hex");

        if(newHash === usuario.contrasena){
            console.log("logueado")
        }else{
            console.log("mala contrseña")
        }
    }
}
const userManager =  new UserManager();

const prueba = async () => {
    let users = await userManager.getUsuarios();
    console.log(users);
    let user = {
        nombre: "mariano",
        apellido: "rigo",
        nombre_usuario: "lalala",
        contrasena: "123"
    }
    await userManager.crearUsuarios(user)
    let hacemeUnGet = await userManager.getUsuarios();
    console.log(hacemeUnGet)
    await userManager.validarUsuario("lalala", "123")

}