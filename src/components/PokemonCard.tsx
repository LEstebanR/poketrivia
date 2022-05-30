import Title from "./Title";
import Card from "./Card";

const PokemonCard = ({ pokemon }) => {
  const image = pokemon?.sprites?.other["official-artwork"].front_default || pokemon?.sprites?.front_default
  
  return (
    <Card>
      <img src={image}/>
    </Card>

  )
}

export default PokemonCard;