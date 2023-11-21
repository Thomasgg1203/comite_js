import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {v4 as uuidv4} from 'uuid';
import { Document } from 'mongoose';
import { ProgramasSchema } from 'src/programas/model/programas.schema';

export type fichaDocument = Ficha & Document;
@Schema()
export class Ficha {
    @Prop({required:true, default: uuidv4})
    id:string;

    @Prop({required:true})
    numero_ficha: string;
    
    @Prop({required:true})
    fecha_inicio_lectiva:Date;
    @Prop({required:true})
    fecha_fin_lectiva:Date;
    @Prop({required:true})
    fecha_inicio_productiva:Date;
    @Prop({required:true})
    fecha_fin_productiva:Date;
        
    @Prop({required:true})
    modalidad:string
        
    @Prop({required:true})
    jornada:string

    @Prop({})
    idPrograma:string
}
export const FichaSchema = SchemaFactory.createForClass(Ficha);

FichaSchema.statics.getFichaPrograma = async function(fichaId:string):Promise<fichaDocument[]> {
    return this.aggregate([
        {
            $match: {id: fichaId}
        },
        {
            $lookup: {
                from:'programas',
                localField:'idPrograma',
                foreignField:'id',
                as:'programa'
            }
        },
        {
            $unwind: '$programa'
        },
        {
            $project:{
                numero_ficha: 1,
                fecha_inicio_lectiva:1,
                fecha_fin_lectiva:1,        
                fecha_inicio_productiva:1,
                fecha_fin_productiva:1,
                modalidad:1,
                jornada:1,
                nombrePrograma:'$programa.nombre'
            }
        }
    ])
}