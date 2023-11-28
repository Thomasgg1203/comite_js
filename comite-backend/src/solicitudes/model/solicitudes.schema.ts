import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as moment from 'moment';


export type solicitudDocument = solicitud & Document;

@Schema()
export class solicitud {
    
  @Prop()
  creadoEn: string;

  @Prop()
  lugar: string;

  @Prop()
  asunto: string;
}

export const solicitudSchema = SchemaFactory.createForClass(solicitud);

solicitudSchema.pre('save', function (next) {
  this.creadoEn = moment().format('MMMM Do YYYY, h:mm:ss a'); // Obtener la fecha y hora actual en el formato especificado
  next();
});