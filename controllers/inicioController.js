import { Op } from "sequelize";
import db from "../config/db.js"
import { Usuario, Pokemon, Venta } from "../models/relaciones.js";

const inicio=(req,res)=>{
    res.render('credenciales/login');
}
const principal=(req,res)=>{
    const mensaje = req.query.msg;

    res.render("inicio", {
      mensaje
    });
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

const listarMisPokemon = async (req,res) => {
  try {
    const usuario = req.session.usuario;

    if (!usuario) {
      return res.redirect("/login");
    }

    const pokemones = await Pokemon.findAll({
      where: {
        id_dueno: usuario.id,
        estado: {
          [Op.in]: ["disponible", "pendiente"] // 🔥 filtro clave
        }
      },
      order: [["id_pokemon", "DESC"]]
    });

    res.render("pokemon/listaMisPokemon", {
      pokemones,
      usuario
    });

  } catch (error) {
    console.log(error);
    res.send("Error al obtener tus Pokémon");
  }
}

const deletePokemon = async (req,res) => {
    const { id } = req.params
    const usuario = req.session.usuario

    try {
      const pokemon = await Pokemon.findByPk(id)

      // Validaciones
      if (!pokemon) throw new Error("Pokemon no encontrado");

      if (pokemon.id_dueno !== usuario.id) {
        throw new Error("No autorizado");
      }

      if (pokemon.estado !== "disponible") {
        throw new Error("No puedes eliminar este Pokémon");
      }
        
      await pokemon.update({
        estado: "eliminado"
      })

      return res.redirect("/inicio?msg=pokemon_eliminado")
    } catch (error) {
      return res.redirect(`/inicio?msg=error&error=${error.message}`)
    }
}

const listarPokemon = async (req,res) => {
    try {
    const usuario = req.session.usuario;


    const pokemones = await Pokemon.findAll({
      where: {
        estado: "disponible", // filtro, solo los disponibles
        id_dueno: {
          [Op.ne]: usuario.id // no mostrar los propios
        } 
      },
      include: [
        {
          model: Usuario,
          as: "dueno",
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

const comprarPokemon = async (req,res) => {
    const id = req.params.id;
    const usuario = req.session.usuario;
    const t = await db.transaction();

    try {
      const pokemon = await Pokemon.findByPk(id, { transaction: t });

      if (!pokemon || pokemon.estado !== "disponible") {
        throw new Error("No disponible");
      }

    const pendiente = await Venta.findOne({
      where: {
        pokemon_id: id,
        estado: "pendiente"
      },
      transaction: t
    });

    if (pendiente) {
      throw new Error("Ya en proceso");
    }

    await Venta.create({
      pokemon_id: id,
      comprador_id: usuario.id
    }, { transaction: t });

    await pokemon.update(
      { estado: "pendiente" },
      { transaction: t }
    );

    await t.commit();

    return res.redirect("/inicio?msg=compra_exitosa");

    } catch (error) {
      await t.rollback();
      return res.redirect("/inicio?msg=error");
    }
}

//Venta - Controllers
const getVentas = async (req,res) => {
  try {
    const usuario = req.session.usuario;

    let whereVenta = {};
    let include = [
    {
      model: Pokemon,
      as: "pokemon",
      include: [
        {
          model: Usuario,
          as: "dueno",
          attributes: ["id", "correo"]
        }
      ]
      },
      {
        model: Usuario,
        as: "comprador",
        attributes: ["id", "correo"]
      }
    ];

  // Lógica por rol
  if (usuario.rol === "admin") {
    // ve todo → no filtramos
  }

  if (usuario.rol === "vendedor") {
    whereVenta = {
    [Op.or]: [
      { comprador_id: usuario.id },
      { "$pokemon.id_dueno$": usuario.id }
    ]
  };
  }

  if (usuario.rol === "comprador") {
    whereVenta.comprador_id = usuario.id;
  }

  const ventas = await Venta.findAll({
    where: whereVenta,
    include,
    order: [["id_venta", "DESC"]]
  });

  res.render("venta/listaVenta", {
    ventas,
    usuario
  });

  } catch (error) {
    return res.redirect("/inicio?msg=error_venta");
  }
}

const postVentaAprobada = async (req,res) => {
  const { id } = req.params;
  const usuario = req.session.usuario;

  const t = await db.transaction();

  try {
    const venta = await Venta.findByPk(id, {
      include: {
        model: Pokemon,
        as: "pokemon"
      },
      transaction: t
    });

    // Validaciones
    if (!venta) throw new Error("Venta no encontrada");

    if (venta.estado !== "pendiente") {
      throw new Error("La venta ya fue procesada");
    }

    if (venta.pokemon.id_dueno !== usuario.id) {
      throw new Error("No autorizado");
    }

    // Actualizar venta
    await venta.update(
      {
        estado: "aprobada",
        fecha_respuesta: new Date()
      },
      { transaction: t }
    );

    // Actualizar pokemon
    await venta.pokemon.update(
      {
        estado: "vendido"
      },
      { transaction: t }
    );

    await t.commit();
    return res.redirect("/inicio?msg=venta_aprobada");

  } catch (error) {
    await t.rollback();
    return res.redirect(`/inicio?msg=error&error=${error.message}`);
  }
}

const postVentaRechazada = async (req,res) => {
  const { id } = req.params;
  const usuario = req.session.usuario;

  const t = await db.transaction();

  try {
    const venta = await Venta.findByPk(id, {
      include: {
        model: Pokemon,
        as: "pokemon"
      },
      transaction: t
    });

    // Validaciones
    if (!venta) throw new Error("Venta no encontrada");

    if (venta.estado !== "pendiente") {
      throw new Error("La venta ya fue procesada");
    }

    if (venta.pokemon.id_dueno !== usuario.id) {
      throw new Error("No autorizado");
    }

    // Rechazar venta
    await venta.update(
      {
        estado: "rechazada",
        fecha_respuesta: new Date()
      },
      { transaction: t }
    );

    // Regresar pokemon a disponible
    await venta.pokemon.update(
      {
        estado: "disponible"
      },
      { transaction: t }
    );

    await t.commit();

    return res.redirect("/inicio?msg=venta_rechazada");

  } catch (error) {
    await t.rollback();
    return res.redirect(`/inicio?msg=error_venta&error=${error.message}`);
  }
}

export {
    inicio,
    principal,
    getAltaUsuario,
    postAltaUsuario,
    getDeleteUsuario,
    DeleteUsuario,
    getAltaPokemon,
    postAltaPokemon,
    listarMisPokemon,
    deletePokemon,
    listarPokemon,
    comprarPokemon,
    getVentas,
    postVentaAprobada,
    postVentaRechazada
}