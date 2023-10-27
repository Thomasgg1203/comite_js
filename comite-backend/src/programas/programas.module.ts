import { Module } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { ProgramasController } from './programas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Programas, ProgramasSchema } from './model/programas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Programas.name, schema:ProgramasSchema}
    ])
  ],
  controllers: [ProgramasController],
  providers: [ProgramasService],
})
export class ProgramasModule {}
