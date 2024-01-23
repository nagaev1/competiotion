const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.get('/user', function(req, res) {
    userController.getAll(req, res)
})

router.post('/user', function(req, res) {
    userController.register(req, res)
})

router.post('/login', function(req, res) {
    userController.login(req, res)
})


module.exports = router