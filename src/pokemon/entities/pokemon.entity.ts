import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()  // para indicar que es un esquema de una base de datos
export class Pokemon extends Document{  //para que cada instancia sea un documento en mongo

    // id: string // Mongo me da el mongoId
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );