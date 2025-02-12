require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
app.use(
  cors({
    origin: ["poke-quartett.netlify.app", "http://localhost:3000"], // Your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
app.use(express.static("public"));

const pokemonRoute = require("./routes/pokemons");
app.use("/pokemons", pokemonRoute);
app.get("/", (req, res) => {
  res.send("Hello Poke-World!");
});
app.get("*", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 3088;
app.set("port", port);

app.listen(port, () => {
  console.log(`Your Pokemon is waiting on port ${port}`);
});
