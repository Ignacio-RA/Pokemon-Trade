import db from "../config/db.js";

import UsuarioModel from "./usuario.js";
import PokemonModel from "./pokemon.js";
import VentaModel from "./venta.js";

// Inicializar modelos
const Usuario = UsuarioModel(db);
const Pokemon = PokemonModel(db);
const Venta = VentaModel(db);

// Relaciones

// Usuario (1) -> (N) Venta
Usuario.hasMany(Venta, {
  foreignKey: "comprador_id"
});
Venta.belongsTo(Usuario, {
  foreignKey: "comprador_id"
});

// Pokemon (1) -> (1) Venta
Pokemon.hasOne(Venta, {
  foreignKey: "pokemon_id"
});
Venta.belongsTo(Pokemon, {
  foreignKey: "pokemon_id"
});

export {
  db,
  Usuario,
  Pokemon,
  Venta
};