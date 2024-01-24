
const express = require('express')

const shiftController = require('../controllers/shiftController')

const router = express.Router()

router.get('/user', function(req, res) {
    shiftController.getAll(req, res)
})

router.post('/user', function(req, res) {
    shiftController.register(req, res)
})

router.post('/login', function(req, res) {
    shiftController.login(req, res)
})


module.exports = router