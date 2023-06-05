const mysql = require("../utils/mysql.js");

exports.getMyFolderList = (id, callback) => {
  const query = `
    SELECT
      hd_folder.owner, hd_folder.name, hd_folder.type, hd_folder.shared, hd_file.name AS fileName
    FROM
      nspeed.hd_folder
    INNER JOIN
      hd_file
    ON
      hd_file.depth = hd_folder.name
    WHERE
      hd_file.owner = '${id}'
      AND hd_folder.shared = 'N'
      AND hd_folder.type = 'folder'
  `;
  mysql.executeQuery(query, callback);
};
