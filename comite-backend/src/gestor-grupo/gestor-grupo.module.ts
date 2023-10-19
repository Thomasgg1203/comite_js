import { Module } from '@nestjs/common';
import { GestorGrupoService } from './gestor-grupo.service';
import { GestorGrupoController } from './gestor-grupo.controller';

@Module({
  controllers: [GestorGrupoController],
  providers: [GestorGrupoService],
})
export class GestorGrupoModule {}
