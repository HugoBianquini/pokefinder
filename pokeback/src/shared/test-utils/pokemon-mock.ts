export const pokemon = {
  id: 9,
  abilities: [
    {
      ability: {
        name: 'torrent',
        url: 'https://pokeapi.co/api/v2/ability/67/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'rain-dish',
        url: 'https://pokeapi.co/api/v2/ability/44/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  name: 'blastoise',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
};

export const pokemonSorted = {
  id: 9,
  abilities: [
    {
      ability: {
        name: 'rain-dish',
        url: 'https://pokeapi.co/api/v2/ability/44/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'torrent',
        url: 'https://pokeapi.co/api/v2/ability/67/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  name: 'blastoise',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
};
