const Mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const conn = Mongoose.createConnection(process.env.DATABASE_URL);

const Character = conn.model("character", require("./models/characterSchema"));
const Planet = conn.model("planet", require("./models/planetSchema"));
const Film = conn.model("film", require("./models/filmSchema"));

module.exports = {
  Character,
  Planet,
  Film,
};
