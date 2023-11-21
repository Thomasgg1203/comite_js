import { Module } from '@nestjs/common';
import { GestorGrupoService } from './gestor-grupo.service';
import { GestorGrupoController } from './gestor-grupo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Usuario.name,
        schema:usuarioSchema
      }
    ])
  ],
  controllers: [GestorGrupoController],
  providers: [GestorGrupoService], 
})
export class GestorGrupoModule {}
