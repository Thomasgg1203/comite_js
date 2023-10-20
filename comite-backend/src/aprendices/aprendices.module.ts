import { Module } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { AprendicesController } from './aprendices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { aprendiz, aprendizSchema } from './model/aprendices.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {name:aprendiz.name, schema:aprendizSchema}
      ]
    )
  ],
  controllers: [AprendicesController],
  providers: [AprendicesService],
})
export class AprendicesModule {}
