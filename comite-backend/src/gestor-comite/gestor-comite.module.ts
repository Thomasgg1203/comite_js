import { Module } from '@nestjs/common';
import { GestorComiteService } from './gestor-comite.service';
import { GestorComiteController } from './gestor-comite.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Usuario.name,
        schema:usuarioSchema
      }
    ])
  ],
  controllers: [GestorComiteController],
  providers: [
    GestorComiteService
  ],
})
export class GestorComiteModule {}
