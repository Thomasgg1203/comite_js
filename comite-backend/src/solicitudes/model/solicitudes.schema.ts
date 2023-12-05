import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId, Types } from 'mongoose';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { type } from 'os';

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

  @Prop({required:false})
  pruebas: string;

  @Prop({type:[{type:Types.ObjectId,ref:'Usuario'}]})
  aprendices: Types.ObjectId[];

  @Prop({default: false})
  estado_solicitud:boolean;
}

export const solicitudSchema = SchemaFactory.createForClass(solicitud);

solicitudSchema.pre('save', function (next) {
  this.creadoEn = moment().format('MMMM Do YYYY, h:mm:ss a'); // Obtener la fecha y hora actual en el formato especificado
  next();
});