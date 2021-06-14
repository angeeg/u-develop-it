const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // Your mySQL username
        user: "root",
        // Your MySQL password
        password: "Kwjp9240!",
        database: "election"
    },
    console.log('Connected to the election database.')
);

module.exports = db;