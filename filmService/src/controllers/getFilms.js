const films = require("../data/index");
module.exports = async (req, res) => {
  const characterList = await films.list();
  res.status(200).send(characterList);
};
