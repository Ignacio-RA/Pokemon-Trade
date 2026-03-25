const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Venta = sequelize.define('venta', {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comprador_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_transaccion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'venta',
    timestamps: true
  });

  return Venta;
};