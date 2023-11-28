import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Solicitud, solicitudSchema } from './model/solicitudes.schema';
import { AuthsService } from 'src/auths/auths.service';
import { JwtModule } from '@nestjs/jwt';
import { Usuario } from 'src/usuarios/model/usuario.schema';
import { AuthsModule } from 'src/auths/auths.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Solicitud.name, schema:solicitudSchema}
    ]),
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual
    AuthsModule
  ],
  controllers: [SolicitudesController],
  providers: [SolicitudesService,
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual
    AuthsService],
})
export class SolicitudesModule {}
