import { Test, TestingModule } from '@nestjs/testing';
import { GestorComiteController } from './gestor-comite.controller';
import { GestorComiteService } from './gestor-comite.service';

describe('GestorComiteController', () => {
  let controller: GestorComiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestorComiteController],
      providers: [GestorComiteService],
    }).compile();

    controller = module.get<GestorComiteController>(GestorComiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
