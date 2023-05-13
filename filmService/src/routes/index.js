const { Router } = require("express");
const controllers = require("../controllers");
const route = Router();

route.get("/", controllers.getFilms);

module.exports = route;
