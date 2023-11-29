import { Module } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { AprendicesController } from './aprendices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';
import { FichasModule } from 'src/fichas/fichas.module';
import { Ficha, FichaSchema } from 'src/fichas/model/fichas.schema';
import { jwtStrategy } from 'src/auths/strategy/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { AuthsService } from 'src/auths/auths.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Usuario.name, schema: usuarioSchema },
      { name: Ficha.name, schema: FichaSchema }
    ]),
    FichasModule
  ],
  controllers: [AprendicesController],
  providers: [
    AprendicesService,
    AuthsService,
    JwtService
  ],
})
export class AprendicesModule {}
