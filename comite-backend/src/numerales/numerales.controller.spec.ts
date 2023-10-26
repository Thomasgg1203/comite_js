import { Test, TestingModule } from '@nestjs/testing';
import { NumeralesController } from './numerales.controller';
import { NumeralesService } from './numerales.service';

describe('NumeralesController', () => {
  let controller: NumeralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumeralesController],
      providers: [NumeralesService],
    }).compile();

    controller = module.get<NumeralesController>(NumeralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
