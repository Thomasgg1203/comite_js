import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramasModule } from './programas/programas.module';
import { FichasModule } from './fichas/fichas.module';
import { GestorGrupoModule } from './gestor-grupo/gestor-grupo.module';
import { AprendicesModule } from './aprendices/aprendices.module';
import { ArticulosModule } from './articulos/articulos.module';
import { CapitulosModule } from './capitulos/capitulos.module';
import { NumeralesModule } from './numerales/numerales.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba'),
    AprendicesModule,ArticulosModule,CapitulosModule, NumeralesModule, SolicitudesModule,ProgramasModule, FichasModule, GestorGrupoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
