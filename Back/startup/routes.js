const express = require('express');
const endereco = require('../routes/endereco.js');
const taxa = require('../routes/taxa.js');

// import user from "../controller/userController.js";

const routes = express.Router();

module.exports = function (app) {
    app
        .use(express.json())
        .use('/JobMatch/endereco', endereco)
        // .use('/JobMatch/taxa', taxa)
        // .use('/JobMatch/user', user)
}

// module.exports { routes as default };