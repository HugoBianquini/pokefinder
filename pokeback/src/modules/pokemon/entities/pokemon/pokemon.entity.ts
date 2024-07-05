import { IAbilities } from './index.type';

export class Pokemon {
  id: number;
  abilities: IAbilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}
