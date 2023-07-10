const express = require("express");
const pokemonRoute = express.Router();
const pokemonsDB = require("../dbs/pokemonsDB");

const pokemons = pokemonsDB.pokemons;
//console.log(pokemons);
pokemonRoute.get("/", (req, res) => {
  res.status(500).send(pokemons);
});

pokemonRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetPokemon = pokemons.find((pokemon) => pokemon.id == id);
  console.log(targetPokemon);
  res.status(500).send(targetPokemon);
});

module.exports = pokemonRoute;
