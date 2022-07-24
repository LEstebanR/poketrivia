import React, {useState, useEffect} from "react"
import styled from "styled-components"

import { useQuery } from "react-query";

import { getPokemons, getPokemon } from "../utils/ReactQuery";

import PokemonCard from "./PokemonCard";
import Options from "./Options";
import Subtitle from "./Subtitle";
import OptionsGroup from "./OptionsGroup";
import Score from "./Score";

const OptionsContainer = ({ options, pokemonData, round, setRound }) => {
  const [pokemon, setPokemon] = useState()
  const pokemonQuery = useQuery(["Answer", pokemonData.name], () => getPokemon(pokemonData?.url));
  
  useEffect(() => {
    if (pokemonQuery.data) {
      setPokemon(pokemonQuery.data)
    }
  }, [pokemonQuery.data]);

  return (
    <>
      <PokemonCard pokemon={pokemon}/>
      <Subtitle>¿Cuál es este Pokemon?</Subtitle>
      <OptionsGroup>
        <Options options={options} pokemon={pokemon} setRound={setRound}round={round} />
      </OptionsGroup>
      <Score round={round}/>
    </>
  )
}

export default OptionsContainer 