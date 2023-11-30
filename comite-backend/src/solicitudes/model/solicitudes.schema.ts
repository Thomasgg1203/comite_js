import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';



export type solicitudDocument = solicitud & Document;

@Schema()
export class solicitud {
  @Prop({unique: true , default: uuidv4})
  id: string;

  @Prop()
  creadoPor: string;    
  
  @Prop()
  creadoEn: string;

  @Prop()
  lugar: string;

  @Prop()
  asunto: string;

  @Prop()
  pruebas: string;
}

export const solicitudSchema = SchemaFactory.createForClass(solicitud);

solicitudSchema.pre('save', function (next) {
  this.creadoEn = moment().format('MMMM Do YYYY, h:mm:ss a'); // Obtener la fecha y hora actual en el formato especificado
  next();
});