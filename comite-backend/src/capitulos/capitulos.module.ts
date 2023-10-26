import { Module } from '@nestjs/common';
import { CapitulosService } from './capitulos.service';
import { CapitulosController } from './capitulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { capitulo, capituloSchema } from './model/capitulos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: capitulo.name, schema: capituloSchema }])],
  controllers: [CapitulosController],
  providers: [CapitulosService],
})
export class CapitulosModule {}
