require("dotenv").config();
const { Sequelize } = require("sequelize");

const db = new Sequelize(
  { database: 'full-mern-stack-video',
    username:'root',
    password: 'password',
    port: 3306,
    host: '127.0.0.1',
    dialect: "mysql",
    logging:false,
    pool: {
        max: 5,
        min: 0,
        idel: 10000,
        acquire: 30000
    }
}
);

db
    .authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = db;