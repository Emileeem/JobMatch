const mongoose = require('mongoose');
const { UserSchema } = require('./UserModel');

const AdicionarVagasSchema = new mongoose.Schema({
    user: {
        type: UserSchema,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    dataInicio: {
        type: Date,
        required: true
    },
    dataTermino: {
        type: Date,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    quantidadedePessoas: {
        type: String,
        required: true
    },
    isAnswer: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: false
    },
    removedAt: {
        type: Date,
        required: false
    },
});

const AdicionarVagasModel = mongoose.model('Adicionar Vagas', AdicionarVagasSchema);
exports.AdicionarVagasModel = AdicionarVagasModel;
exports.AdicionarVagasSchema = AdicionarVagasSchema;