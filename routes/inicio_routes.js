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
router.get('/inicio', protegerRuta ,principal);

//Usuario
router.get('/inicio/alta-usr', protegerRuta, getAltaUsuario)
router.post('/inicio/alta-usr/new', protegerRuta, postAltaUsuario)

router.get('/inicio/eliminar-usr', protegerRuta, getDeleteUsuario)
router.delete('/inicio/eliminar-usr/delete/:id', protegerRuta, DeleteUsuario)

//Pokemon
router.get('/inicio/alta-pokemon', protegerRuta, getAltaPokemon)
router.post('/inicio/alta-pokemon/new',
    protegerRuta, //Si no ha iniciado sesión no puede crear un pokemon
    upload.single("foto"),
    postAltaPokemon)

router.get('/inicio/lista-pokemon', protegerRuta, listarPokemon)

export default router