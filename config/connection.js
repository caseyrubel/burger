// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b9001befe1f348",
    password: "08a820dd",
    database: "heroku_5f35bc80f7bf450"
});
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;