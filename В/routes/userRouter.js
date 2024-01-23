const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', function(req, res) {
    userController.getAll(req, res)
})

router.post('/', function(req, res) {
    userController.register(req, res)
})

router.post('/login', function(req, res) {
    userController.login(req, res)
})


module.exports = router