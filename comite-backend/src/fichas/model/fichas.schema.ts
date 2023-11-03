import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'; 
import { IsDateString } from 'class-validator';
import { Document } from 'mongoose';

export type fichaDocument = Ficha & Document;

@Schema()
export class Ficha {
    @Prop({required:true})
    numero_ficha: string;
    
    @Prop({required:true})
    @IsDateString()
    fecha_inicio_lectiva:Date;
    @Prop({required:true})
    @IsDateString()
    fecha_fin_lectiva:Date;
    @Prop({required:true})
    @IsDateString()
    fecha_inicio_productiva:Date;
    @Prop({required:true})
    @IsDateString()
    fecha_fin_productiva:Date;
    
    @Prop({required:true})
    modalidad:string
    
    @Prop({required:true})
    jornada:string
}
export const FichaSchema = SchemaFactory.createForClass(Ficha);