import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './strategy/jwt.strategy';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
@Module({
  imports:[
    // importamos JwtModule, este componente ayuda a implementar JsonWebToken y manipularlo
    // una vez llamado el modulo, vamos a sobreescribir algunas configuraciones basicas 'useFactory'
    JwtModule.registerAsync({
      useFactory:() =>{
        return {
          global: true,
          // en la opción de las firmas, haremos que estas expiren en 1 dia
          signOptions: { expiresIn: '1d' },
          // el secretKey, se define como una constante que solo sabremos de lado del BackEnd, ya sea aquí o en el .env
          secret: process.env.SECRET_KEY,
        };
      }
    }),
    // Importamos el Objeto y el esquema de nuestra base de datos, para hacer uso de nuestro modelo Usuario desde la autenticación
    MongooseModule.forFeature([
      {
        name:Usuario.name, schema:usuarioSchema
      }
    ])
  ],
  controllers: [AuthsController],
  //dependencias que requiere el modulo de autenticación
  providers: [AuthsService,jwtStrategy],
})
export class AuthsModule {}
