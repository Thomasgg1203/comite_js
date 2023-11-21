import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from './model/usuario.schema';
import { AprendicesService } from 'src/aprendices/aprendices.service';
import { GestorGrupoService } from 'src/gestor-grupo/gestor-grupo.service';
import { GestorComiteService } from 'src/gestor-comite/gestor-comite.service';
import { AuthsService } from 'src/auths/auths.service';
import { jwtStrategy } from 'src/auths/strategy/jwt.strategy';
import { JwtService } from '@nestjs/jwt';

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
    GestorGrupoService,
    GestorComiteService,
    AuthsService,
    JwtService
  ],
})
export class UsuariosModule {}
