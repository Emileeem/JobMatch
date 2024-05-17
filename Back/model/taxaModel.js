import { Sequelize } from "sequelize";
import db from "../startup/db.js";

export default db.define("Taxa", {
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
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    DataTermino: {
        type: Sequelize.BIGINT,
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
    IDEndereco: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Endereco',
            key: 'IDEndereco'
        }
    },
    IDUsuario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Usuario',
            key: 'IDUsuario'
        }
    }
});