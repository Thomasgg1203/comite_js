import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramasModule } from './programas/programas.module';
import { FichasModule } from './fichas/fichas.module';
import { GestorGrupoModule } from './gestor-grupo/gestor-grupo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthsModule } from './auths/auths.module';
import { ConfigModule } from '@nestjs/config';
import { AprendicesModule } from './aprendices/aprendices.module';
import { ArticulosModule } from './articulos/articulos.module';
import { CapitulosModule } from './capitulos/capitulos.module';
import { NumeralesModule } from './numerales/numerales.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ParagrafosModule } from './paragrafos/paragrafos.module';
import { Connection, connection } from 'mongoose';
import { GestorComiteModule } from './gestor-comite/gestor-comite.module';
import { ComitesModule } from './comites/comites.module';
import { EmailService } from './config/email.service';
import { EmailController } from './config/email.controller';
import { ObservacionesModule } from './observaciones/observaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true }),
    MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-delete'));
        return connection;
      },
    }),
    ProgramasModule, 
    FichasModule, 
    GestorGrupoModule, 
    UsuariosModule,
    AuthsModule,
    AprendicesModule,
    ArticulosModule,
    CapitulosModule, 
    NumeralesModule, 
    SolicitudesModule, 
    ParagrafosModule, 
    GestorComiteModule, ComitesModule, ObservacionesModule,
  ],
  controllers: [AppController,EmailController],
  providers: [AppService,EmailService],
  exports:[EmailService]
})
export class AppModule {}

