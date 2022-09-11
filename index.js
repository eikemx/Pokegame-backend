require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const pokemonRoute = require("./routes/pokemons");
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const PORT = process.env.PORT || 3088;

app.use("/pokemons", pokemonRoute);
app.get("/", (req, res) => {
  res.send("Hello Poke-World!");
});

app.listen(PORT, () => {
  console.log(`Your Pokemon is waiting on port ${PORT}`);
});
