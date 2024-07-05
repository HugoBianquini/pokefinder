import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../entities/pokemon/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get(':name')
  async getPokemonByName(@Param('name') name: string): Promise<Pokemon> {
    return await this.pokemonService.findPokemonByName(name);
  }
}
