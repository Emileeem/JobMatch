const express = require('express');
const EnderecoController = require('../controller/enderecoController');
const router = express.Router();

router
    .get('/api/endereco', (req, res) => {
        console.log("Hello in console");
        return
    })

    .get('/', EnderecoController.getAllUser)
    .get('/:id', EnderecoController.getUserById)
    .post('/', EnderecoController.create)
    .patch('/:id', EnderecoController.update)
    .delete('/:id', EnderecoController.delete)

module.exports = router