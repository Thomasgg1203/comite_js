import { Test, TestingModule } from '@nestjs/testing';
import { GestorGrupoController } from './gestor-grupo.controller';
import { GestorGrupoService } from './gestor-grupo.service';

describe('GestorGrupoController', () => {
  let controller: GestorGrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestorGrupoController],
      providers: [GestorGrupoService],
    }).compile();

    controller = module.get<GestorGrupoController>(GestorGrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
