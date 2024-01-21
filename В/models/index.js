const { Sequelize } = require('sequelize')
const config = require('../config')


const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.params
)

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Соединение с БД было успешно установлено')
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
      }
}

sequelize.sync()
  .then(() => {
      console.log("All models were synchronized successfully.");
  })


console.log("импорт")

const Users = require('./UsersModel')(sequelize)


const db = {}
db.sequelize = sequelize
db.Users = Users
db.testConnection = testConnection



module.exports = db