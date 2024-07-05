import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pokemon } from '../entities/pokemon/pokemon.entity';
import { PokemonResponseMapper } from '../dto/pokemon.dto';
import { IGetPokemonByNameResponse } from '../dto/index.type';
import { POKE_API_ENV } from 'src/shared/constants';

@Injectable()
export class PokemonService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async findPokemonByName(name: string): Promise<IGetPokemonByNameResponse> {
    try {
      const { data: pokemonData } =
        await this.httpService.axiosRef.get<Pokemon>(
          `${this.getPokeApiUrl()}/${name}`,
        );

      const orderedByAbility = this.orderByAbilities(pokemonData);

      const pokemon = {
        ...pokemonData,
        abilities: orderedByAbility,
      };

      return PokemonResponseMapper.mapToResponse(pokemon);
    } catch (error) {
      if (error.response.status === 404) {
        throw new NotFoundException('Pokemon not found');
      }

      throw new InternalServerErrorException();
    }
  }

  private orderByAbilities(pokemon: Pokemon) {
    return pokemon.abilities.sort((a, b) =>
      a.ability.name.localeCompare(b.ability.name),
    );
  }

  private getPokeApiUrl() {
    return `${this.configService.get<string>(POKE_API_ENV)}/pokemon`;
  }
}
