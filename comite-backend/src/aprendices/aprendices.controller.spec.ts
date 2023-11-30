import { Test, TestingModule } from '@nestjs/testing';
import { AprendicesController } from './aprendices.controller';
import { AprendicesService } from './aprendices.service';

describe('AprendicesController', () => {
  let controller: AprendicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AprendicesController],
      providers: [AprendicesService],
    }).compile();

    controller = module.get<AprendicesController>(AprendicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
