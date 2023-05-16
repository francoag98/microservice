const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const films = require("../data/index");

module.exports = async (req, res) => {
  const filmList = await films.list();
  if (!filmList)
    throw new ClientError("no se pudo encontrar la lista de films", 400);
  return response(res, 200, filmList);
};
