const express = require('express');
const adicionarVagas = require('../src/routes/AdicionarVagasRoute');

module.exports = function (app) {
    app
        .use(express.json())
        .use('/user', user)
        .use('/vaga', vaga)
}