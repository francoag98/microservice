const axios = require("axios");
const list = async () => {
  return await axios.get("http://database:8004/Film").then((res) => res.data);
};

module.exports = {
  list,
};
