var mysql = require("mysql");

// MySQL connection setup
var connection = mysql.createConnection({
  host: "localhost",
  port: 13306,
  user: "",
  password: "",
  database: "",
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    process.exit(1); // Terminate the application on connection error
  } else {
    console.log("Connected to MySQL database");
  }
});

// Function to execute a MySQL query
function executeQuery(query, callback) {
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

function executeQueryParam(query, params, callback) {
  const connection = mysql.createConnection({
    // Configure your MySQL connection here
  });

  connection.connect((err) => {
    if (err) {
      callback(err);
      return;
    }

    connection.query(query, params, (error, results) => {
      connection.end();
      if (error) {
        callback(error);
        return;
      }
      callback(null, results);
    });
  });
}

// Close the database connection on application exit
process.on("exit", () => {
  connection.end();
  console.log("Database connection closed");
});

module.exports = {
  executeQuery,
  executeQueryParam,
};
