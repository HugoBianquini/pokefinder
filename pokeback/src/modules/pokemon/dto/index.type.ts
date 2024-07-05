import { IAbilities } from '../entities/pokemon/index.type';

export interface IGetPokemonByNameResponse {
  id: number;
  abilities: IAbilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}
