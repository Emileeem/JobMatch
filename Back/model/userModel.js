const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const User = sequelize.define('Usuario', {
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
    type: Sequelize.INTEGER,
    references: 'Endereco',
    referencesKey: 'IDEndereco'
    }
});

