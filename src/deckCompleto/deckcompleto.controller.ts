import { Controller, Get, Param } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) {}

  @Get(':user:comandante')
  async getDeck(@Param('comandante') comandante: string, @Param('user') user:string) {
    const deck = await this.deckCompletoService.getCommanderAndDeck(user, comandante);
    return deck;
  }
}
