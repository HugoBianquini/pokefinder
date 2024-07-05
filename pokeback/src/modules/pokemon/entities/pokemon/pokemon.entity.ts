import { IAbilities } from './index.type';

export class Pokemon {
  id: string;
  abilities: IAbilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}
