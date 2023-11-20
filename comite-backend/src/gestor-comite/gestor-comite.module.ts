import { Module } from '@nestjs/common';
import { GestorComiteService } from './gestor-comite.service';
import { GestorComiteController } from './gestor-comite.controller';

@Module({
  controllers: [GestorComiteController],
  providers: [GestorComiteService],
})
export class GestorComiteModule {}
