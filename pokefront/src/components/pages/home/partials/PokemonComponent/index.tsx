import { Container, AbilityText } from "./styles";
import { TPokemonComponentProps } from "./types";

const PokemonComponent = ({ pokemon }: TPokemonComponentProps) => {
  return (
    <Container>
      <img width={148} src={pokemon.sprites.front_default}></img>
      <div>
        <p>
          <strong>Nome:</strong> {pokemon.name}
        </p>
        <p>
          <strong>Habilidades:</strong>
        </p>
        {pokemon.abilities.map((ability, idx) => (
          <AbilityText key={`${ability}_${idx}`}>
            {idx + 1}. {ability.ability.name}
          </AbilityText>
        ))}
      </div>
    </Container>
  );
};

export default PokemonComponent;
