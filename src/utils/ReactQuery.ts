
export const getPokemons = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=151',
  );
  const data = await res.json();
  return data.results;
};

export const getPokemon = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

