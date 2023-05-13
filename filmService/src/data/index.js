const films = require("./films.json");
const list = async () => {
  return films;
};

module.exports = {
  list,
};
