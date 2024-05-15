const { Sequelize, DataTypes } = require("sequelize");
const db = require("../startup/db.js");

const User = db.define("Usuario", {
  IDUsuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DataNascimento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  IDEndereco: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Endereco',
      key: 'IDEndereco'
    }
  },
});

module.exports = User;