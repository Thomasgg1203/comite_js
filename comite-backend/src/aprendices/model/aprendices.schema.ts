import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export type aprendizDocument = aprendiz & Document;

@Schema()
export class aprendiz {
  @Prop()
  nombres: string;

  @Prop()
  apellidos: string;

  @Prop()
  email: string;

  @Prop()
  documento: string;

  @Prop()
  telefono: string;

  @Prop()

  direccion: string;

  @Prop()
  fecha_nacimiento: Date;

  //@Prop()
  //idFicha: mongoose.Types.ObjectId;
}

export const aprendizSchema = SchemaFactory.createForClass(aprendiz);
