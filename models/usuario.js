const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    correo: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    rol: {
      type: DataTypes.ENUM('admin', 'vendedor', 'comprador'),
      allowNull: false
    },
    contrasena: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'usuario',
    timestamps: true,

    hooks: {
      // Antes de crear usuario
      beforeCreate: async (usuario) => {
        const salt = await bcrypt.genSalt(10);
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
      },

      // Antes de actualizar contraseña
      beforeUpdate: async (usuario) => {
        if (usuario.changed('contrasena')) {
          const salt = await bcrypt.genSalt(10);
          usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
        }
      }
    }
  });

  // Método para comparar contraseñas
  Usuario.prototype.validarPassword = async function(password) {
    return await bcrypt.compare(password, this.contrasena);
  };

  return Usuario;
};