import { Module } from '@nestjs/common';
import { AppController } from './controllers/pokemon.controller';
import { AppService } from './services/pokemon.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class PokemonModule {}
