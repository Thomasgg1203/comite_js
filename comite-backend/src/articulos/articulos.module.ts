import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { articulo, articuloSchema } from './model/articulos.schema';
import { paragrafo, paragrafoSchema } from 'src/paragrafos/model/paragrafos.schema';
import { capitulo, capituloSchema } from 'src/capitulos/model/capitulos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:articulo.name, schema: articuloSchema},
      {name:paragrafo.name, schema: paragrafoSchema},{name:capitulo.name, schema: capituloSchema}]),
  ],
  controllers: [ArticulosController],
  providers: [ArticulosService],
})
export class ArticulosModule {}
