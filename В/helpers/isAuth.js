const jwt = require('jsonwebtoken')
const config = require('../config')
const { Users } = require('../models')

module.exports = async function (req, res, next) {
    if (req.path == '/login')
        return next()
    try {
        if (!req.headers.authorization)
            throw new Error('there is no token')
        let token = req.headers.authorization.replace('Bearer ', '');
        const {login} = await jwt.verify(token, config.access_token_secret)
        console.log(login)
        const user = await Users.findOne({ where: { login }})
        if (!user)
            throw new Error('login not found')
        next()
    } catch (err) {
        res.status(403).json({ error: { code: 403, message: "Login failed", error: err.message } })
    }
}