import express from "express";
import upload from "../middlewares/subirImagen.js"
import { protegerRuta } from "../middlewares/auth.js";
import {inicio,
    principal,
    getAltaUsuario,
    postAltaUsuario,
    getDeleteUsuario,
    DeleteUsuario,
    getAltaPokemon,
    postAltaPokemon,
    listarPokemon} from "../controllers/inicioController.js"

const router=express.Router();
//Routing
router.get('/',inicio);
router.get('/inicio',principal);

//Usuario
router.get('/inicio/alta-usr', getAltaUsuario)
router.post('/inicio/alta-usr/new', postAltaUsuario)

router.get('/inicio/eliminar-usr', getDeleteUsuario)
router.delete('/inicio/eliminar-usr/delete/:id', DeleteUsuario)

//Pokemon
router.get('/inicio/alta-pokemon', getAltaPokemon)
router.post('/inicio/alta-pokemon/new',
    protegerRuta, //Si no ha iniciado sesión no puede crear un pokemon
    upload.single("foto"),
    postAltaPokemon)

router.get('/inicio/lista-pokemon', listarPokemon)

export default router