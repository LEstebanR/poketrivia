export const getRandomElements = (Pokemons: never[]) => {
  const randomElements = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * Pokemons.length);
    randomElements.push(Pokemons[randomIndex]);
  }
  
  return randomElements
}

export const getRandomElement = (Pokemons: any[]): any => {
  const randomIndex = Math.floor(Math.random() * Pokemons.length);
  return Pokemons[randomIndex];
}