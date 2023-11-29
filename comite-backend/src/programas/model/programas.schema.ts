import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'; 
import mongoose, { Document } from 'mongoose';
import {v4 as uuidv4} from "uuid";
import { Ficha, FichaSchema, fichaDocument } from 'src/fichas/model/fichas.schema';

export type programasDocument = Programas & Document;

@Schema()
export class Programas {
    @Prop({required:true, default:uuidv4})
    id:string;

    @Prop({required:true})
    codigo:string;
    
    @Prop({required:true})
    nombre:string;
    
    @Prop({required:true})
    nivel_formacion:string;

}
export const ProgramasSchema = SchemaFactory.createForClass(Programas);