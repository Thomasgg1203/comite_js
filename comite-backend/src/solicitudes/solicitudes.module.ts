import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { solicitud, solicitudSchema } from './model/solicitudes.schema';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name:solicitud.name, schema:solicitudSchema },
      { name: Usuario.name, schema: usuarioSchema }
    ]),
  ],
  controllers: [SolicitudesController],
  providers: [SolicitudesService],
})
export class SolicitudesModule {}