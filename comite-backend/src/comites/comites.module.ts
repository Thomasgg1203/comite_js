import { Module } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { ComitesController } from './comites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comites, comiteSchema } from './model/comites.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Comites.name, schema: comiteSchema}
  ])],
  controllers: [ComitesController],
  providers: [ComitesService],
})
export class ComitesModule {}
