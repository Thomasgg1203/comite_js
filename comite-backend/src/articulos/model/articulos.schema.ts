import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type articuloDocument = articulo & Document;

@Schema()
export class articulo {
  @Prop({unique: true , default: uuidv4})
  id: string;

  @Prop()
  idCapitulo: string;

  @Prop()
  articulo: string;  

  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  idParagrafo: string;

}

export const articuloSchema = SchemaFactory.createForClass(articulo);

articuloSchema.statics.findAllArticulos = function() {
  const list = this.aggregate([
    {
      $match: {
        deleted: false
      }
    },
    {
      $lookup: {
        from: 'paragrafos',
        foreignField: 'id',
        localField: 'idParagrafo',
        as: 'paragrafo',
        pipeline: [
          {
            $project: {
              _id: 0,
              descripcion: 1
            }
          }
        ]
      }
    },
    {
      $unwind: {
        path: '$paragrafo',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'capitulos',
        foreignField: 'id',
        localField: 'idCapitulo',
        as: 'capitulo',
        pipeline: [
          {
            $project: {
              _id: 0,
              capitulo: 1,
              titulo: 1
            }
          }
        ]
      }
    },
    {
      $unwind: {
        path: '$capitulo',
        preserveNullAndEmptyArrays: true
      }
    }
  ]);
  return list;
}



