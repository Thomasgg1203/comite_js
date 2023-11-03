import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    // importamos JwtModule, este componente ayuda a implementar JsonWebToken y manipularlo
    JwtModule.registerAsync({
      // una ez llamado el modulo, vamos a sobreescribir algunas configuraciones basicas 'useFactory'
      useFactory:() =>{
        return {
          // en la opción de las firmas, haremos que estas expiren en 1 dia
          signOptions: {expiresIn: '1d'},
          // el secretKey, se define como una constante que solo sabremos de lado del BackEnd
          secret: 'sena010203',
          // podemos cambiarla o introducirla en un .env para produccion
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
  providers: [AuthsService],
})
export class AuthsModule {}
