import { pokemonSorted } from 'src/shared/test-utils/pokemon-mock';
import { PokemonResponseMapper } from './pokemon.dto';

describe('PokemonResponseMapper', () => {
  it('should map to response', () => {
    const response = PokemonResponseMapper.mapToResponse(pokemonSorted);

    expect(response).toStrictEqual(pokemonSorted);
  });
});
