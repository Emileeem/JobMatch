import { Sequelize } from "sequelize";
import db from "../startup/db.js";

export default db.define("Taxas", {
    IDTaxa: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DataInicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    DataTermino: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    Valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    QtdTaxa: {
        type: Sequelize.INTEGER,
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
    IDUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'IDUsuario'
        }
    },
}, {
    timestamps: true  
});