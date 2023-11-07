import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type capituloDocument = capitulo & Document;

@Schema()
export class capitulo {
  @Prop()
  capitulo: string;

  @Prop()
  titulo: string;

}

export const capituloSchema = SchemaFactory.createForClass(capitulo);