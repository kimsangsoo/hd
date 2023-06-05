const mysql = require("../utils/mysql.js");

exports.getMyFileList = (id, callback) => {
  const query = `
      SELECT
        hd_file.owner, hd_file.type, hd_file.shared, hd_file.name, hd_file.depth, hd_file_details.size
      FROM
        nspeed.hd_file
      INNER JOIN
        hd_file_details
      ON
        hd_file.owner = hd_file_details.owner AND hd_file.name = hd_file_details.name
      WHERE
        hd_file.depth = 'root'
        AND hd_file.shared = 'N'
        AND hd_file.use_YN = 'Y'
        AND hd_file.type = 'file'
        AND hd_file.owner = '${id}'
    `;
  mysql.executeQuery(query, callback);
};

exports.getSharedFileList = (id, callback) => {
  const query = `
      SELECT
        hd_file.owner, hd_file.type, hd_file.shared, hd_file.name, hd_file.depth, hd_file_details.size
      FROM
        nspeed.hd_file
      INNER JOIN
        hd_file_details
      ON
        hd_file.owner = hd_file_details.owner AND hd_file.name = hd_file_details.name
      WHERE
        hd_file.depth = 'root'
        AND hd_file.shared = 'Y'
        AND hd_file.use_YN = 'Y'
        AND hd_file.type = 'file'
    `;
  mysql.executeQuery(query, callback);
};

// Function to delete a file
exports.deleteFile = (owner, name, callback) => {
  const updateQuery = `
      UPDATE hd_file
      SET use_YN = 'N'
      WHERE name = '${name}' AND owner = '${owner}' AND shared = 'N'
    `;
  mysql.executeQuery(updateQuery, (error, updateResult) => {
    if (error) {
      callback(error);
      return;
    }

    const insertQuery = `
        INSERT INTO hd_trash (name, owner)
        VALUES ('${name}', '${owner}')
      `;
    mysql.executeQuery(insertQuery, callback);
  });
};

exports.getDeletedFileList = (id, callback) => {
  const query = `
  SELECT name, owner FROM nspeed.hd_trash WHERE owner = '${id}' AND use_YN='Y'
    `;
  mysql.executeQuery(query, callback);
};

exports.setEmptyTrash = (id, callback) => {
  const updateQuery = `
      UPDATE hd_trash
      SET use_YN = 'N'
      WHERE  owner = '${id}' 
    `;
  mysql.executeQuery(updateQuery, callback);
};
