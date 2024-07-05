import { Pokemon } from '../entities/pokemon/pokemon.entity';
import { IGetPokemonByNameResponse } from './index.type';

export class PokemonResponseMapper {
  static mapToResponse(pokemonEntity: Pokemon): IGetPokemonByNameResponse {
    return {
      id: pokemonEntity.id,
      abilities: pokemonEntity.abilities,
      name: pokemonEntity.name,
      sprites: {
        front_default: pokemonEntity.sprites.front_default,
      },
    };
  }
}
