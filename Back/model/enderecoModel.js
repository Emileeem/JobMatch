const { DataTypes, Sequelize } = require("sequelize");
const db = require("../startup/db.js");

const Endereco = db.define("Endereco", {
    IDEndereco: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Endereco;