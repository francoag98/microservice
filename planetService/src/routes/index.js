const { Router } = require("express");
const controllers = require("../controllers");
const route = Router();

route.get("/", controllers.getPlanets);

module.exports = route;
