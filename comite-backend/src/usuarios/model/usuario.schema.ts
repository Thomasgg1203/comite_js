import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type usuarioDocument = Usuario & Document;

// _TODO_: idea para implementar roles ya definidos en el esquema usuarioDocument
//  enum Roles {
//     ADMINISTRADOR='administrador',
//     GESTOR_G='gestor-grupo',
//     GESTOR_C='gestor-comite',
//     APRENDIZ='aprendiz'
// }
@Schema({ timestamps:true })
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
    contrasenia:string;

    @Prop()
    telefono:string;

    @Prop()
    direccion: string;
  
    @Prop()
    fecha_nacimiento: Date;

    @Prop()
    id_:mongoose.Types.ObjectId;

    @Prop({default:'administrador', /*_TODO_: Parte de la idea: type: [String], enum: Roles*/})
    roles:string[];
}
export const usuarioSchema=SchemaFactory.createForClass(Usuario);