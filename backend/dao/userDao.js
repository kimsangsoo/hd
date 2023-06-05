const mysql = require("../utils/mysql.js");

exports.authenticateUser = (id, password, callback) => {
  const selectQuery = `SELECT id FROM hd_account WHERE id='${id}' AND password='${password}'`;
  mysql.executeQuery(selectQuery, callback);
};

exports.jsoinUser = (id, password, name, callback) => {
  const insertQuery = `INSERT INTO hd_account(id, password, name) 
  VALUES('${id}', '${password}', '${name}')`;
  mysql.executeQuery(insertQuery, callback);
};
