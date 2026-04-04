import { where } from "sequelize";
import { Usuario, Pokemon } from "../models/relaciones.js";

const inicio=(req,res)=>{
    res.render('credenciales/login');
}
const principal=(req,res)=>{
    res.render('inicio');
}

//Usuario - Controllers
const getAltaUsuario = async (req,res)=>{
    res.render('usr/altaUsuario');
}

const postAltaUsuario = async (req,res)=>{
    const { correo, contrasena, rol } = req.body;

    console.log(req.body)

    try {
        await Usuario.create({
        correo,
        contrasena,
        rol
        });

        res.redirect('/inicio');
    } catch (error) {
        console.log(error);
        res.render('usr/altaUsuario');
    }

}   

const getDeleteUsuario = async (req,res)=>{
    const usuarios = await Usuario.findAll({
    attributes: ["id", "correo", "rol"] // incluye id aunque no lo muestres
  });

  res.render("usr/deleteUsuario", {usuarios})
}

const DeleteUsuario = async (req,res)=>{
    console.log(req.body.id)
    const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.send("Usuario no encontrado");
    }

    await usuario.destroy();

      res.redirect('/inicio')
  } catch (error) {
    console.log(error);
    res.send("Error al eliminar");
  }
}

//Pokemon - Controllers
const getAltaPokemon = async (req,res)=>{
    res.render('pokemon/altaPokemon')
}

const postAltaPokemon = async (req,res)=>{
    try {
        const { nombre, tipo, nivel, precio } = req.body;

        const usuario = req.session.usuario;
        
        //Nombre de la foto
        const foto = req.file ? req.file.filename : null;

        //Validación básica
        if (!nombre || !tipo || !nivel || !precio) {
        return res.send("Todos los campos son obligatorios");
        }

        //Crear en BD
        await Pokemon.create({
        nombre,
        tipo,
        nivel,
        precio,
        foto,
        id_dueno: usuario.id
        });

        res.redirect("/inicio");

    } catch (error) {
        console.log(error);
        res.send("Error al crear Pokémon");
    }
}

const listarPokemon = async (req, res) => {
  try {
    const pokemones = await Pokemon.findAll({
      where: {
        estado: "disponible" // filtro
      },
      include: [
        {
          model: Usuario,
          attributes: ["correo"]
        }
      ],
      order: [["id_pokemon", "DESC"]]
    });

    res.render("pokemon/listaPokemon", {
      pokemones
    });

  } catch (error) {
    console.log(error);
    res.send("Error al obtener pokemones");
  }
};

export {
    inicio,
    principal,
    getAltaUsuario,
    postAltaUsuario,
    getDeleteUsuario,
    DeleteUsuario,
    getAltaPokemon,
    postAltaPokemon,
    listarPokemon
}