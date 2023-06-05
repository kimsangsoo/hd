const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const registerRoutes = require("./routes/route");

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const joinRouter = require("./routes/join");
const downloadRouter = require("./routes/download");
const fileRouter = require("./routes/file");
const sharedFileRouter = require("./routes/sharedFile");
const folderRouter = require("./routes/folder");
const deleteRouter = require("./routes/delete");
const deletedFileRouter = require("./routes/deletedFile");
const emptyTrashRouter = require("./routes/emptyTrash");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const routesConfig = [
  { path: "/", router: indexRouter },
  { path: "/api/login", router: loginRouter },
  { path: "/api/join", router: joinRouter },
  { path: "/api/download", router: downloadRouter },
  { path: "/api/file", router: fileRouter },
  { path: "/api/folder", router: folderRouter },
  { path: "/api/delete", router: deleteRouter },
  { path: "/api/deleted/file", router: deletedFileRouter },
  { path: "/api/empty/trash", router: emptyTrashRouter },
  { path: "/api/shared/file", router: sharedFileRouter },
];

registerRoutes(app, routesConfig);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
