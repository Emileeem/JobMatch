const { Sequelize } = require('sequelize');
const db = require('../startup/db.js');


module.exports = db.define("Taxa", {
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
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    DataTermino: {
        type: Sequelize.INTEGER,
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
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'IDUsuario'
        }
    }
});