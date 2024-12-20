export interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: false;
  slot: 1;
}

export interface IPokemonResponse {
  id: string;
  abilities: IAbilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}
