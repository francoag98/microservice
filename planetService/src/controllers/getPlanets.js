const planets = require("../data/index");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

module.exports = async (req, res) => {
  const planetsList = await planets.list();
  if (!planetsList)
    throw new ClientError("no se encontro la lista de planets", 400);
  return response(res, 200, planetsList);
};
