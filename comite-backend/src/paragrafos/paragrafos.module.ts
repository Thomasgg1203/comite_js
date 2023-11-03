import { Module } from '@nestjs/common';
import { ParagrafosService } from './paragrafos.service';
import { ParagrafosController } from './paragrafos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { paragrafo, paragrafoSchema } from './model/paragrafos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:paragrafo.name, schema: paragrafoSchema}]),
  ],
  controllers: [ParagrafosController],
  providers: [ParagrafosService],
})
export class ParagrafosModule {}
