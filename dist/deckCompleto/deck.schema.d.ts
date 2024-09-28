import { Schema, Document } from 'mongoose';
export declare const DeckSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userName: string;
    commander: any;
    deck: any[];
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    userName: string;
    commander: any;
    deck: any[];
}>> & import("mongoose").FlatRecord<{
    userName: string;
    commander: any;
    deck: any[];
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export interface DeckDocument extends Document {
    userName: any;
    commander: any;
    deck: any[];
}
