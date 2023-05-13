const planets = require("../data/index");
module.exports = async (req, res) => {
  const planetsList = await planets.list();
  res.status(200).send(planetsList);
};
