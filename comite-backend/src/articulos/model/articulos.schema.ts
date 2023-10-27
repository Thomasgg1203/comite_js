import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type articuloDocument = articulo & Document;

@Schema()
export class articulo {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  paragrafo: string;

}

export const articuloSchema = SchemaFactory.createForClass(articulo);

