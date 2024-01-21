const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', function(req, res) {
    res.send("work fine")
})

router.post('/', function(req, res) {
    userController.add(req, res)
})


module.exports = router