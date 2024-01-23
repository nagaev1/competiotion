
const port = 3000
module.exports = {
    acces_token_secret: "d5jyus4u4ed7se5yj7ued54f6g54edj74eg457jue4t6gyu",
    refresh_token_secret: "cj68fvkxe5uy7kmxcr5ynf67judry5huy6ruhyrb67",
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