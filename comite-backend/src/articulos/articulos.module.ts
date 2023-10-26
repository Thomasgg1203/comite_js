import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { articulo, articuloSchema } from './model/articulos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:articulo.name, schema: articuloSchema}]),
  ],
  controllers: [ArticulosController],
  providers: [ArticulosService],
})
export class ArticulosModule {}
