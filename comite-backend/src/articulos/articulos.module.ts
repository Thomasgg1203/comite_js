import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { articulo, articuloSchema } from './model/articulos.schema';
import { paragrafo, paragrafoSchema } from 'src/paragrafos/model/paragrafos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:articulo.name, schema: articuloSchema},
      {name:paragrafo.name, schema: paragrafoSchema}]),
  ],
  controllers: [ArticulosController],
  providers: [ArticulosService],
})
export class ArticulosModule {}
