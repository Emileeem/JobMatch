const express = require('express');
const UserController = require('../controller/userController');
const router = express.Router();

router
    .get('/api/', (req, res) => {
        console.log("Hello in console");
        return
    })

    // .get('/', UserController.getAllUser)
    // .get('/:id', UserController.getUserById)
    // .post('/', UserController.create)
    // .patch('/:id', UserController.update)
    // .delete('/:id', UserController.delete)

module.exports = router