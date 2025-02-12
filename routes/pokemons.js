const express = require("express");
const pokemonRoute = express.Router();
const pokemonsDB = require("../dbs/pokemonsDB");

const pokemons = pokemonsDB.pokemons;

pokemonRoute.get("/", (req, res) => {
  try {
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

pokemonRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetPokemon = pokemons.find((pokemon) => pokemon.id == id);
  console.log("TARGET POKEMON BE >>>", targetPokemon);
  if (targetPokemon) {
    res.status(200).json(targetPokemon);
  } else {
    res.status(500).send({ error: "Pokemon not found" });
  }
});

module.exports = pokemonRoute;
