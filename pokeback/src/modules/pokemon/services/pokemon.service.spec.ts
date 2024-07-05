import { HttpService } from '@nestjs/axios';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';
import { configServiceMock } from 'src/shared/test-utils/config-service-mock';
import { ConfigService } from '@nestjs/config';
import { pokemon, pokemonSorted } from 'src/shared/test-utils/pokemon-mock';

describe('PokemonsService', () => {
  let service: PokemonService;

  const httpServiceMock = {
    axiosRef: {
      get: jest.fn().mockResolvedValue({ data: pokemon }),
    },
  };

  beforeEach(async () => {
    service = new PokemonService(
      httpServiceMock as unknown as HttpService,
      configServiceMock as unknown as ConfigService,
    );
  });

  describe('FindPokemonByName', () => {
    it('should return pokemon ordered by abilities name', async () => {
      const pokemon = await service.findPokemonByName('blastoise');

      expect(pokemon.abilities).toStrictEqual(pokemonSorted.abilities);
      expect(httpServiceMock.axiosRef.get).toHaveBeenCalledTimes(1);
      expect(configServiceMock.get).toHaveBeenCalledTimes(1);
      expect(configServiceMock.get).toHaveBeenCalledWith('POKE_API_BASE_URL');
    });

    it('should throw an error when pokemon not found', async () => {
      jest.spyOn(httpServiceMock.axiosRef, 'get').mockRejectedValue({
        response: {
          status: 404,
          statusText: 'Not Found',
        },
      });

      expect(service.findPokemonByName('blastoise')).rejects.toThrow(
        new NotFoundException('Pokemon not found'),
      );
    });

    it('should throw an internal error when any error occur', async () => {
      jest.spyOn(httpServiceMock.axiosRef, 'get').mockRejectedValue({
        response: {
          status: 403,
          statusText: 'Error test',
        },
      });

      expect(service.findPokemonByName('blastoise')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
