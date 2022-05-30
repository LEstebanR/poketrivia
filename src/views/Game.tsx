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
  const [pokemon, setPokemon] = useState()
  const pokemons = useQuery("pokemons", getPokemons);

  useEffect(() => {
    if (pokemons.data) {
      const randomPokemons = getRandomElements(pokemons.data);
      setNewOptions(randomPokemons);
      const randomPokemon = getRandomElement(randomPokemons);
      setPokemonData(randomPokemon);
    }
  }, [pokemons.data]);

  return (
    <Page>
      <Title>PokeTrivia</Title>
      {
      newOptions ? <OptionsContainer options={newOptions} pokemonData={pokemonData}/> : null
      }
      <Button><Link to={'/'}>Home</Link></Button>
    </Page>
  );
}

export default Game;
