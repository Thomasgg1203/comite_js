import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type usuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop({required:true})
    nombres:string;

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

    @Prop()
    direccion: string;
  
    @Prop()
    fecha_nacimiento: Date;

    @Prop()
    id_:mongoose.Types.ObjectId;

    @Prop({default:'administrador'})
    roles:string[];
}
export const usuarioSchema=SchemaFactory.createForClass(Usuario);