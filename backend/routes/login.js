const express = require("express");
const router = express.Router();
const userDao = require("../dao/userDao");

router.post("/", function (req, res, next) {
  const { id, pw } = req.body;

  userDao.authenticateUser(id, pw, (err, results) => {
    if (err) {
      console.error("Error executing select query:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
