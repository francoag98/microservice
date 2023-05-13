const characters = require("./characters.json");
const list = async () => {
  return characters;
};

module.exports = {
  list,
};
