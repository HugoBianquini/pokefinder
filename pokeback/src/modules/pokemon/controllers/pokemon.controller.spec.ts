import { Test, TestingModule } from '@nestjs/testing';
import { pokemonSorted } from 'src/shared/test-utils/pokemon-mock';
import { PokemonController } from './pokemon.controller';
import { PokemonModule } from '../pokemon.module';
import { PokemonService } from '../services/pokemon.service';
import { ConfigModule } from '@nestjs/config';

describe('PokemonsController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  const pokemonServiceMock = {
    findPokemonByName: jest.fn().mockImplementation((name: string) => {
      return pokemonSorted;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PokemonModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env.development',
        }),
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = pokemonServiceMock as unknown as PokemonService;

    controller['pokemonService'] = service;
  });

  describe('PokemonController', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
      expect(controller['pokemonService']).toBeDefined();
    });
  });

  describe('GetPokemonByName', () => {
    it('should return a pokemon ordered by abilities', async () => {
      const pokemon = await controller.getPokemonByName('blastoise');

      expect(pokemon.abilities).toStrictEqual(pokemonSorted.abilities);
      expect(pokemonServiceMock.findPokemonByName).toHaveBeenCalledTimes(1);
      expect(pokemonServiceMock.findPokemonByName).toHaveBeenCalledWith(
        'blastoise',
      );
    });
  });
});
