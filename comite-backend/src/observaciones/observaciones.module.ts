import { Module } from '@nestjs/common';
import { ObservacionesService } from './observaciones.service';
import { ObservacionesController } from './observaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';
import { Observacion, observacionSchema } from './model/observaciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Observacion.name, schema: observacionSchema},
      {name: Usuario.name, schema: usuarioSchema}
    ])
  ],
  controllers: [ObservacionesController],
  providers: [ObservacionesService],
})
export class ObservacionesModule {}
