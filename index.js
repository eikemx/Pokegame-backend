require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// Define allowed origins
const allowedOrigins = [
  "https://poke-quartett.netlify.app",
  "http://localhost:3000",
];

// CORS configuration with more explicit options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if origin is in allowedOrigins or if it's undefined (like postman requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply CORS configuration
app.use(cors(corsOptions));

// Other middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
const pokemonRoute = require("./routes/pokemons");
app.use("/pokemons", pokemonRoute);
app.get("/", (req, res) => {
  res.send("Hello Poke-World!");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = process.env.PORT || 3088;
app.listen(port, () => {
  console.log(`Your Pokemon is waiting on port ${port}`);
});
