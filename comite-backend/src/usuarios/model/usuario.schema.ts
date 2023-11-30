import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
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

    @Prop({default:'aprendiz' ,type: [String], enum: Roles})
    roles:string[];

    @Prop({ type: Types.ObjectId, ref: 'Ficha', required: false })
    ficha: Types.ObjectId;
}
export const usuarioSchema=SchemaFactory.createForClass(Usuario);
usuarioSchema.statics.usuarioAprendizFicha = async function(numeroFicha:string) {
    const list = await this.aggregate([
        {
            $match: {
                numero_ficha: numeroFicha,
            },
        },
        {
            $lookup: {
              from: 'fichas', // Nombre de la colección de fichas
              localField: 'ficha',
              foreignField: '_id',
              as: 'ficha',
            },
        },
        {
            $unwind: {
                path: '$ficha',
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $project: {
                id:1,
                nombres:1,
                apellidos:1,    
                documento:1,    
                correo:1,    
                contrasenia:1,
                telefono:1,
                direccion: 1,  
                fecha_nacimiento: 1,
                roles:1,
                ficha: 'ficha._id'
            },
        },
    ]);
    return list;
}