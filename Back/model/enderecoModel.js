const { Sequelize } = require('sequelize');
const db = require('../startup/db.js');

module.exports = db.define("Endereco", {
    IDEndereco: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Pais: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    UF: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Municipio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Cep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Complemento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

