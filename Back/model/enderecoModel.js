import { Sequelize } from "sequelize";
import db from "../startup/db.js";

export default db.define("Enderecos", {
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
    // createdAt: {
    //     type: Sequelize.Date,
    //     required: true
    // },
    // updatedAt: {
    //     type: Sequelize.Date,
    //     required: false
    // },
    // removedAt: {
    //     type: Sequelize.Date,
    //     required: false
    // },
}, {
    timestamps: false
});

