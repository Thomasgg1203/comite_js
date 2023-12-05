import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export type observacionDocument = Observacion & Document;
@Schema()
export class Observacion {
    @Prop({unique: true, default: uuidv4 })
    id:string;

    @Prop()
    detalles: string;

    @Prop({type: Types.ObjectId, ref: 'Usuario'})
    usuarioId:Types.ObjectId;
}

export const observacionSchema = SchemaFactory.createForClass(Observacion);