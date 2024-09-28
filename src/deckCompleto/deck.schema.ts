import { Schema, Document } from 'mongoose';

export const DeckSchema = new Schema({
  userName: {type: String, required: true},
  commander: { type: Object, required: true },
  deck: { type: Array, required: true },
});

export interface DeckDocument extends Document {
  userName: any;
  commander: any;
  deck: any[];
}
