const express = require('express');
const TaxaController = require('../controller/taxaController');
const router = express.Router();

router
    .get('/api/taxa/', (req, res) => {
        console.log("Hello in console");
        return
    })

    // .get('/', TaxaController.getAllUser)
    // .get('/:id', TaxaController.getUserById)
    // .post('/', TaxaController.create)
    // .patch('/:id', TaxaController.update)
    // .delete('/:id', TaxaController.delete)

module.exports = router