import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type paragrafoDocument = paragrafo & Document;

@Schema()
export class paragrafo {

  @Prop({unique: true , default: uuidv4})
  id: string;

  @Prop()
  descripcion: string;
  
}

export const paragrafoSchema = SchemaFactory.createForClass(paragrafo);

