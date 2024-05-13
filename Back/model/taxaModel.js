const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const Taxa = sequelize.define('Taxa', {
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DataInicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    DataTermino: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    QtdTaxa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    IDEndereco: {
        type: Sequelize.INTEGER,
        references: 'Endereco',
        referencesKey: 'IDEndereco' 
    },
    IDUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'Usuario',
        referencesKey: 'IDUsuario'
    }
});