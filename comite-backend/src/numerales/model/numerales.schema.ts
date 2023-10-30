import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type numeralDocument = numeral & Document;

@Schema()
export class numeral {
    
  @Prop()
  descripcion: string;
}

export const numeralSchema = SchemaFactory.createForClass(numeral);