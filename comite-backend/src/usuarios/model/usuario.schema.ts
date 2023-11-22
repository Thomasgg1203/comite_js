import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose, { Document, Types } from "mongoose";
import { FichasService } from "src/fichas/fichas.service";
import { Ficha, fichaDocument } from "src/fichas/model/fichas.schema";
import {v4 as uuidv4} from "uuid";
export type usuarioDocument = Usuario & Document;

// _TODO_: implementar roles ya definidos en el esquema usuarioDocument
enum Roles {
    ADMINISTRADOR='administrador',
    GESTOR_GRUPO='gestor-grupo',
    GESTOR_COMITE='gestor-comite',
    APRENDIZ='aprendiz'
}
@Schema({ timestamps:true })
export class Usuario {

    @Prop({required:true, default: uuidv4})
    id:string;

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

    @Prop({default:'aprendiz' ,type: [String], enum: Roles})
    roles:string[];

    //No tiene integridad, si va a ingresar un usuario.Rol['aprendiz'] toca que le ingrese el id de la ficha
    @Prop({})
    fichaId:string;
}
export const usuarioSchema=SchemaFactory.createForClass(Usuario);

usuarioSchema.statics.getFichaAprendiz = async function(usuarioId:string):Promise<fichaDocument | null> {
    const user=await this.findOne({id:usuarioId, roles:Roles.APRENDIZ});
    if (!user){
        return null
    }
    return this.findOne({ id: user.fichaId })
}