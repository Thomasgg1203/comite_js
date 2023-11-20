import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from './model/usuario.schema';
import { AprendicesService } from 'src/aprendices/aprendices.service';
import { GestorGrupoService } from 'src/gestor-grupo/gestor-grupo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Usuario.name, schema:usuarioSchema}
    ])
  ],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    AprendicesService,
    GestorGrupoService
  ],
})
export class UsuariosModule {}
