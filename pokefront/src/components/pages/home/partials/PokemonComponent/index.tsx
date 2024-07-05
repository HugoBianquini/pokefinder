import { Container } from "./styles";
import { TPokemonComponentProps } from "./types";

const PokemonComponent = ({ pokemon }: TPokemonComponentProps) => {
  return <Container>{pokemon.name}</Container>;
};

export default PokemonComponent;
