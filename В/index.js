const express = require('express')
const config = require('./config')
const app = express()
const db = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

db.testConnection()

function t0() {
    db.Users.findAll().then(result => {
        console.log(result)
    })
}
t0()


const basicRouter = require('./routes/basicRouter')
app.use('/', basicRouter)
const userRouter = require('./routes/userRouter')
app.use('/', userRouter)



app.listen(config.port, () => console.log(`server working on http://localhost:${config.port} `))