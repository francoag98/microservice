const controllers = require("../controllers");
const { Router } = require("express");

const route = Router();

route.get("/", controllers.getCharacters);

module.exports = route;
