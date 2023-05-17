const { Router } = require("express");
const models = require("../mongo");
const { validationModel } = require("../middlewares");
const { response } = require("../utils");
const route = Router();

route.get("/:model", validationModel, async (req, res) => {
  const { model } = req.params;
  const find = await models[model].list();
  return response(res, 200, find);
});

module.exports = route;
