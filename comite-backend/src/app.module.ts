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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true }),
    MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba'),
    ProgramasModule, 
    FichasModule, 
    GestorGrupoModule, 
    UsuariosModule,
    AuthsModule,
    AprendicesModule,
    ArticulosModule,
    CapitulosModule,
    NumeralesModule, 
    SolicitudesModule
  ]
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
