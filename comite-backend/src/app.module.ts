import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramasModule } from './programas/programas.module';
import { FichasModule } from './fichas/fichas.module';
import { GestorGrupoModule } from './gestor-grupo/gestor-grupo.module';

@Module({
  // MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba'),
  
  imports: [MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba'),ProgramasModule, FichasModule, GestorGrupoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
