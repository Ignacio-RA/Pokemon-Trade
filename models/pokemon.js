const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pokemon = sequelize.define('pokemon', {
    id_pokemon: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    vendido: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pokemon',
    timestamps: true
  });

  return Pokemon;
};