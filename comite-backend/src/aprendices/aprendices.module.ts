import { Module } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { AprendicesController } from './aprendices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Usuario.name, schema: usuarioSchema }
    ]),
  ],
  controllers: [AprendicesController],
  providers: [AprendicesService],
})
export class AprendicesModule {}
