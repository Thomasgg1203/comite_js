import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type usuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop({required:true})
    nomrbes:string;
    @Prop()
    apellidos:string;
    
    @Prop({required:true})
    documento:string;
    
    @Prop({required:true})
    correo:string;

    @Prop({required:true})
    telefono:string;

    @Prop({required:true})
    contrasenia:string;
}
export const usuarioSchema=SchemaFactory.createForClass(Usuario);