import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type articuloDocument = articulo & Document;

@Schema()
export class articulo {
  @Prop({unique: true , default: uuidv4})
  id: string;

  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop({required: true})
  idParagrafo: string;

}

export const articuloSchema = SchemaFactory.createForClass(articulo);

articuloSchema.statics.findAllArticulos = function(){
  const list = this.aggregate(
    [
      {
        $lookup:{
          from: 'paragrafos',
          foreignField: 'id',
          localField: 'idParagrafo',
          as: 'paragrafo',
          pipeline:[
            {
              $project:{
                _id:0,
                descripcion: 1
              }
            }
          ]
        }
      },
      {
        $unwind: '$paragrafo'
      }
    ]
  )
  return list
}

