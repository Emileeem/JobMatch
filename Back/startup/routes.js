const express = require('express');
const adicionarVagas = require('../src/routes/AdicionarVagasRoute');

module.exports = function (app) {
    app
        .use(express.json())
        .use('/user', user)
        .use('/vaga', vaga)
}

// import express from "express";
// import * as user from "../controller/userController.js"

// const routes = express.Router();

// routes.post("/api/user", user.create());

// export { routes as default };

