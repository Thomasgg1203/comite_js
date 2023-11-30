import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { solicitud, solicitudSchema } from './model/solicitudes.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:solicitud.name, schema:solicitudSchema}]),
  ],
  controllers: [SolicitudesController],
  providers: [SolicitudesService],
})
export class SolicitudesModule {}