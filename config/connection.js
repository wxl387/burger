var mysql = require("mysql");

var connection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.err("error connection: " + err.stack);
	return;
	}

	console.log("connected as id " + connection.threadId);
});

module.exports = connection;