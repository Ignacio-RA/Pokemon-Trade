import express from "express";
import { validarUsuario } from "../controllers/loginController.js";

const routerLogin=express.Router();

//Routing
routerLogin.post('/validar', validarUsuario);


export default routerLogin