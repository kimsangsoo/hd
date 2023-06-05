const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  // 파일 이름은 req.query에 포함 되어 있음
  // 편의상 sample 파일로 대체
  const file =
    "C:\\Users\\USER\\Documents\\Git\\hd\\backend\\routes\\sample.json";
  res.download(file);
});

module.exports = router;
