import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';

@Injectable()
export class DeckCompletoService {
    constructor(
        private readonly httpService: HttpService,

        @InjectModel('Deck') private deckModel: Model<DeckDocument>,
    ) { }

    async getCommanderAndDeck(userName: string) {
        const commanderUrl = `https://api.magicthegathering.io/v1/cards/random}`;

        // Buscar o comandante
        const commanderResponse = await this.httpService.get(commanderUrl).toPromise();
        const commander = commanderResponse.data.cards[0]; // Assumindo que o comandante é o primeiro resultado

        if (commanderResponse.data.cards.length === 0) {
            throw new Error('Comandante não encontrado!');
        }

        const colors = commander.colors.join(',');

        // Buscar 99 cartas com base nas cores do comandante
        const deckUrl = `https://api.magicthegathering.io/v1/cards?colors=${colors}&pageSize=99`;
        const deckResponse = await this.httpService.get(deckUrl).toPromise();
        const deck = deckResponse.data.cards;

        // Gerar o JSON
        const deckJson = {
            userName,
            commander,
            deck,
        };

        // Salvar no MongoDB
        const createdDeck = new this.deckModel(deckJson);
        await createdDeck.save();

        return deckJson;
    }

    async getDecks(){

    }
}
