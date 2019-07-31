var mysql = require('mysql');

const port = process.env.PORT || 3000; // server port

// database connection
var dbconnection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12270558",
    password: "ScvznCe494",
    database: "sql12270558",
    port: 3306
});

module.exports = dbconnection;