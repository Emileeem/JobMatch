const express = require('express');
const endereco = require('../routes/endereco.js');
// const taxa = require('../routes/taxa.js');

module.exports = function (app) {
    app
        // .use(express.json()) // Middleware para analisar JSON
        .use('/jobmatch/endereco', endereco); // Definindo a rota para 'endereco'
        // .use('/jobmatch/taxa', taxa); // Definindo a rota para 'taxa'
};