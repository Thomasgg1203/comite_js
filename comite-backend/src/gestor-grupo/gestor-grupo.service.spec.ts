import { Test, TestingModule } from '@nestjs/testing';
import { GestorGrupoService } from './gestor-grupo.service';

describe('GestorGrupoService', () => {
  let service: GestorGrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestorGrupoService],
    }).compile();

    service = module.get<GestorGrupoService>(GestorGrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
