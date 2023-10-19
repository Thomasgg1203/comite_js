import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramasModule } from './programas/programas.module';
import { FichasModule } from './fichas/fichas.module';
import { GestorGrupoModule } from './gestor-grupo/gestor-grupo.module';

@Module({
  imports: [ProgramasModule, FichasModule, GestorGrupoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
