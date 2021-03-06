import React, { useState, useEffect } from "react";

import { useQuery, useQueries } from "react-query";
import { Link } from "react-router-dom";

import { getPokemons, getPokemon } from "../utils/ReactQuery";
import {getRandomElements, getRandomElement } from "../utils/getRandomElements";

import Button from "../components/Button";
import Page from "../components/Page";
import Title from "../components/Title";
import OptionsContainer from "../components/OptionsContainer";

const Game = () => {
  const [newOptions, setNewOptions] = useState([])
  const [pokemonData, setPokemonData] = useState()
  const [round, setRound] = useState(0)
  const pokemons = useQuery("pokemons", getPokemons);

  useEffect(() => {
    if (pokemons.data) {
      const randomPokemons = getRandomElements(pokemons.data);
      setNewOptions(randomPokemons);
      const randomPokemon = getRandomElement(randomPokemons);
      setPokemonData(randomPokemon);
    }
  }, [pokemons.data, round]);

  return (
    <Page>
      <Title>PokeTrivia</Title>
      {
      pokemonData ? <OptionsContainer options={newOptions} pokemonData={pokemonData} round={round} setRound={setRound}/> : null
      }
      <Link to={'/'}><Button>Home</Button></Link>
    </Page>
  );
}

export default Game;
