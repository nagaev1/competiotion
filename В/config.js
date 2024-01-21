
const port = 3000
module.exports = {
    port,
    db: {
        database: "sys",
        username: "root",
        password: "q1w2e3",
        params: {
            host: "localhost",
            dialect: "mysql",
            pool: {
                max: 1,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    }
}