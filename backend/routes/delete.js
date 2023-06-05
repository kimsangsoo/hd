const express = require("express");
const router = express.Router();
const fileDao = require("../dao/fileDao");

router.post("/", function (req, res, next) {
  const { owner, type, shared, name, depth, size } = req.body;

  fileDao.deleteFile(owner, name, (err, results) => {
    if (err) {
      console.error("Error executing select query:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
