import { Test, TestingModule } from '@nestjs/testing';
import { GestorComiteService } from './gestor-comite.service';

describe('GestorComiteService', () => {
  let service: GestorComiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestorComiteService],
    }).compile();

    service = module.get<GestorComiteService>(GestorComiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
