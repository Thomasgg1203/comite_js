import { Test, TestingModule } from '@nestjs/testing';
import { ParagrafosController } from './paragrafos.controller';
import { ParagrafosService } from './paragrafos.service';

describe('ParagrafosController', () => {
  let controller: ParagrafosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParagrafosController],
      providers: [ParagrafosService],
    }).compile();

    controller = module.get<ParagrafosController>(ParagrafosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
