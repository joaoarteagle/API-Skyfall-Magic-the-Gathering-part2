import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';
export declare class DeckCompletoService {
    private readonly httpService;
    private deckModel;
    constructor(httpService: HttpService, deckModel: Model<DeckDocument>);
    getCommanderAndDeck(userName: string, nomeComandante: string): Promise<{
        userName: string;
        commander: any;
        deck: any;
    }>;
    getDecks(): Promise<void>;
}
