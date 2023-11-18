const mysql =  require('mysql2/promise');

require("dotenv").config();

const db = mysql.createPool({
    // 100개를 미리 할당
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db