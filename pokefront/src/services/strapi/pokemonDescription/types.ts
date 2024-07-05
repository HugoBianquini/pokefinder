interface IAttributes {
  description: string;
  name: string;
}

export interface IPokemonDescriptionResponse {
  id: number;
  attributes: IAttributes;
}
