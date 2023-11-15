import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export type capituloDocument = capitulo & Document;

@Schema()
export class capitulo {
  @Prop({unique: true , default: uuidv4})
  id: string;

  @Prop()
  capitulo: string;

  @Prop()
  titulo: string;

}

export const capituloSchema = SchemaFactory.createForClass(capitulo);

