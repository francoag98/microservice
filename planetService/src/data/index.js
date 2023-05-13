const planets = require("./planets.json");
const list = async () => {
  return planets;
};

module.exports = {
  list,
};
