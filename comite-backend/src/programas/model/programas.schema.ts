import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'; 
import { IsDateString } from 'class-validator';
import { timeStamp } from 'console';
import mongoose, { Document } from 'mongoose';

export type programasDocument = Programas & Document;

@Schema()
export class Programas {
    @Prop({required:true})
    codigo:string;
    
    @Prop({required:true})
    nombre:string;
    
    @Prop({required:true})
    nivel_formacion:string;

    // @Prop()
    // id_:mongoose.Types.ObjectId;
}
export const ProgramasSchema = SchemaFactory.createForClass(Programas);