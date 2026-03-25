import {Usuario} from '../models/relaciones.js'

const validarUsuario = async (req, res)=>{
    const { correo, contrasena } = req.body;

    console.log(req.body)

    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
        return res.send("Usuario no existe");
    }

    const valido = await usuario.validarPassword(contrasena);

    if (!valido) {
        return res.send("Contraseña incorrecta");
    }

    res.redirect('/inicio')
    }

export {
    validarUsuario}