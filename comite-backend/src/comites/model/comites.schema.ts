import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type comiteDocument = Comites & Document;

@Schema()
export class Comites {

    @Prop({unique: true , default: uuidv4})  
    id: string;

    @Prop({required:true})
    nombre: string;

    @Prop({required:true})  
    fecha_inicio: Date;
    
    @Prop({required:true})
    objetivo_reunion: string;

    @Prop({required:true})
    lugar: string;

    @Prop({required:true})
    detalles: string;

    @Prop({type: Types.ObjectId, ref: 'Usuario'})
    usuarioId:Types.ObjectId;
}

export const comiteSchema = SchemaFactory.createForClass(Comites);
