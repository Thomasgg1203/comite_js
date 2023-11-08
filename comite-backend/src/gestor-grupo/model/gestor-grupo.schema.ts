import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'; 
import { IsDateString } from 'class-validator';
import { Document } from 'mongoose';

export type gestorGrupoDocument = GestorGrupo & Document;

@Schema()
export class GestorGrupo {
    @Prop({required:true})
    nombres:string;
    
    @Prop({required:true})
    apellidos:string;
    
    @Prop({required:true})
    documento:string;
    
    @Prop({required:true})
    correo:string;

    @Prop({required:true})
    telefono:string;
}
export const GestorGrupoSchema = SchemaFactory.createForClass(GestorGrupo);