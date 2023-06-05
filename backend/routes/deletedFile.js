const express = require("express");
const router = express.Router();
const fileDao = require("../dao/fileDao");

router.get("/", function (req, res, next) {
  const id = req.query.id;

  fileDao.getDeletedFileList(id, (err, results) => {
    if (err) {
      console.error("Error executing select query:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
