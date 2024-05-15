const express = require('express');
const AdicionarVagasController = require('../controller/AdicionarVagasController');
const route = express.Router();

route
    .post('/', AdicionarVagasController.Vagas)
    .get('/get/:id', AdicionarVagasController.GetVagasById)
    .get('/get-all', AdicionarVagasController.GetAllVagas)
    .get('/get-by-id/:id', AdicionarVagasController.GetVagasById)
    .get('/get-by-user-id/:id', AdicionarVagasController.getVagasByUserId)
    .post('/delete', AdicionarVagasController.Delete)

module.exports = route;
