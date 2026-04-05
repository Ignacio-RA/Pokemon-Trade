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
    listarPokemon,
    comprarPokemon,
    getVentas,
    postVentaAprobada,
    postVentaRechazada} from "../controllers/inicioController.js"

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
router.post('/inicio/comprar/:id', protegerRuta, comprarPokemon)

//Ventas
router.get('/inicio/transacciones', protegerRuta, getVentas)
router.post('/inicio/transacciones/aprobar/:id', protegerRuta, postVentaAprobada)
router.post('/inicio/transacciones/rechazar/:id',protegerRuta, postVentaRechazada)

export default router