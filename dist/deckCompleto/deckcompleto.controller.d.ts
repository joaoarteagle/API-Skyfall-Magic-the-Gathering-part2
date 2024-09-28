import { DeckCompletoService } from './deckcompleto.service';
export declare class DeckCompletoController {
    private readonly deckCompletoService;
    constructor(deckCompletoService: DeckCompletoService);
    getDeck(comandante: string, user: string): Promise<{
        userName: string;
        commander: any;
        deck: any;
    }>;
}
