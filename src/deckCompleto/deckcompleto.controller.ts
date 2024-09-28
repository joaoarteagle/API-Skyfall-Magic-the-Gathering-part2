import { Controller, Get, Param } from '@nestjs/common';
import { DeckCompletoService } from './deckcompleto.service';

@Controller('deckcompleto')
export class DeckCompletoController {
  constructor(private readonly deckCompletoService: DeckCompletoService) {}

  @Get(':user')
  async getDeck(@Param('user') user:string) {
    const deck = await this.deckCompletoService.getCommanderAndDeck(user);
    return deck;
  }
}
