const characters = require("../data/index");
module.exports = async (req, res) => {
  const characterList = await characters.list();
  res.status(200).send(characterList);
};
