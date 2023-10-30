import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from 'src/usuarios/model/usuario.schema';

@Module({
  imports:[
    // Importamos el Objeto y el esquema de nuestra base de datos, 
    // para asi poder hacer uso de nuestro modelo Usuario desde la autenticación
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
