
console.log('controller import')
const { Users } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config')


exports.register = async (req, res) => {
    try {
        const newID = await Users.max('user_id') + 1
        Users.create({
            user_id: newID,
            name: req.body.name,
            surname: req.body.surname,
            patronymic: req.body.patronymic,
            email: req.body.email,
            phone_number: req.body.phone,
            login: req.body.login,
            password: req.body.password,
            photo_file: req.body.photo,
            status: req.body.status,
            role_id: 3
        })
        console.log('Создан пользователь')
        res.status(201).send({data: {id: 6, status: 'created'}})
    } catch (err) {
        res.status(400).send({error: {code: 400, message: err.message}})
    }
}

exports.login = async (req, res) => {

    const user = await Users.findOne({ where: {login: req.body.login}})
    if (user.password == req.body.password){
        const accesToken = jwt.sign({ login: user.login}, config.acces_token_secret, { expiresIn: "365d" })
        res.status(200).send({data: { accesToken }})
        
    } else {
        res.status(401).send({error: {code: 401, message: "Authentication failed"}})
    }
}

exports.logout = async (req,res) => {
    res.status(200).send({ data: { message: "logout"}})
}

exports.getAll = async (req, res) => {
    const users = await Users.findAll()
    res.send({data: users})
}