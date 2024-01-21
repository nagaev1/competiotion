const {  DataTypes  } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Users', {
        user_id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
        },
        surname: {
            type: DataTypes.STRING(100),
        },
        patronymic: {
            type: DataTypes.STRING(100),
        },
        email: {
            type: DataTypes.STRING(100),
        },
        phone_number: {
            type: DataTypes.STRING(20),
        },
        login: {
            type: DataTypes.STRING(100),
        },
        password: {
            type: DataTypes.STRING(100),
        },
        photo_file: {
            type: DataTypes.STRING(),
        },
        status: {
            type: DataTypes.STRING(20),
        },
        role_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: false,
        tableName: 'users',
    }
    )
}