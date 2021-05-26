const express = require("express");

const routes = require("../../routes");
const { port } = require("../env");

const app = express();
app.set("port", port || 3000);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.json());
Object.keys(routes).forEach((key) => app.use(`/api/${key}`, routes[key]));
module.exports = app;