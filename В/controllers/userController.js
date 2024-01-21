
console.log('controller import')
const { Users } = require('../models')


exports.add = (req, res) => {
    Users.create({
        user_id: null,
        name: req.body.name,
        surname: req.body.surname,
        patronymic: req.body.patronymic,
        email: req.body.email,
        phone_number: req.body.phone,
        login: req.body.login,
        password: req.body.pass,
        photo_file: req.body.photo,
        status: req.body.status,
        role_id: 3
    })
    console.log('Создан пользователь')
    res.status(201).send({data: {id: 6, status: 'created'}})
}