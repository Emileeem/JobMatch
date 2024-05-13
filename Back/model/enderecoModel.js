const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const Endereco = sequelize.define('Endereco', {
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

