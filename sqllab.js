// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#3E7e9h1s",
  database: "djmx",
});

// A simple SELECT query
connection.query(
  "SELECT * FROM emprendedora where idEmprendedora = 1",
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
