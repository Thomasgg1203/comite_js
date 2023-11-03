import { Module } from '@nestjs/common';
import { GestorGrupoService } from './gestor-grupo.service';
import { GestorGrupoController } from './gestor-grupo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GestorGrupo, GestorGrupoSchema } from './model/gestor-grupo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:GestorGrupo.name, schema:GestorGrupoSchema}
    ])
  ],
  controllers: [GestorGrupoController],
  providers: [GestorGrupoService],
})
export class GestorGrupoModule {}
