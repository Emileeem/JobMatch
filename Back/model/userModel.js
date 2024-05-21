import { Sequelize } from "sequelize";
import db from "../startup/db.js";

export default db.define("Usuarios", {
  IDUsuario: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  Cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DataNascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  IDEndereco: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
        model: 'Enderecos',
        key: 'IDEndereco'
    }
  },
}, {
  timestamps: true
});