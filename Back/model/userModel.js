import { Sequelize } from "sequelize";
import db from "../startup/db.js";

export default db.define("Usuario", {
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
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  IDEndereco: {
    type: Sequelize.INTEGER,
    references: {
        model: 'Endereco',
        key: 'IDEndereco'
    }
  },
});