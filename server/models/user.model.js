const { DataTypes } = require('sequelize');
const db = require('../config/db')

const User = db.define("user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
		quote: {
            type: DataTypes.STRING,
        },
    },
    {
        paranoid: true
    },
    {
        tableName: "user"
    }
);

(async () => {
    await db.sync({ force: false });
    console.log(`sync here...`)
})()

module.exports = User
