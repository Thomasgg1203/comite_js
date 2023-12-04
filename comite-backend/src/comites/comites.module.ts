import { Module } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { ComitesController } from './comites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comites, comiteSchema } from './model/comites.schema';
import { Solicitude } from 'src/solicitudes/entities/solicitude.entity';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Comites.name, schema: comiteSchema},
      {name: Solicitude.name, schema: comiteSchema},
      {name: Usuario.name, schema: usuarioSchema}
  ])],
  controllers: [ComitesController],
  providers: [ComitesService],
})
export class ComitesModule {}
