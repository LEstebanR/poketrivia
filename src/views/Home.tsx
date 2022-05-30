import React from "react";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import Page from "../components/Page";
import Title from "../components/Title";
import Text from "../components/Text";

const Home = () => {
  return (
    <Page>
      <Title>PokeTrivia</Title>
      <Text>¿Qué tanto conoces los Pokémon?</Text>
      <Button><Link to={'/game'}>Start Game</Link></Button>
    </Page>
  );
}

export default Home
