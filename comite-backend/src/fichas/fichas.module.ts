import { Module } from '@nestjs/common';
import { FichasService } from './fichas.service';
import { FichasController } from './fichas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ficha, FichaSchema } from './model/fichas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Ficha.name, schema:FichaSchema}
    ])
  ],
  controllers: [FichasController],
  providers: [FichasService],
  exports: [FichasService]
})
export class FichasModule {}
