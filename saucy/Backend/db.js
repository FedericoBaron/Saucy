const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.SERVER_HOST,
    user: process.env.SERVER_USER,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_DATABASE
})

module.exports = db