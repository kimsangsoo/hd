const express = require("express");

function registerRoutes(app, routesConfig) {
  for (const routeConfig of routesConfig) {
    const { path, router } = routeConfig;
    app.use(path, router);
  }
}

module.exports = registerRoutes;
