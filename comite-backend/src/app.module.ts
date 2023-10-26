import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprendicesModule } from './aprendices/aprendices.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticulosModule } from './articulos/articulos.module';
import { CapitulosModule } from './capitulos/capitulos.module';
import { NumeralesModule } from './numerales/numerales.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:AYCUBrRgsgDVhBa5@cluster0.rdb206m.mongodb.net/prueba'),
    AprendicesModule,ArticulosModule,CapitulosModule, NumeralesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
