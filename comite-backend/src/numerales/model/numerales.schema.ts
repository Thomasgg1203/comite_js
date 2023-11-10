import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type numeralDocument = numeral & Document;

@Schema()
export class numeral {
  @Prop({unique: true , default: uuidv4})
  id: string;
    
  @Prop()
  descripcion: string;

}

export const numeralSchema = SchemaFactory.createForClass(numeral);
