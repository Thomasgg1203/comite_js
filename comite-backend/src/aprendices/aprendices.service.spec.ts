import { Test, TestingModule } from '@nestjs/testing';
import { AprendicesService } from './aprendices.service';

describe('AprendicesService', () => {
  let service: AprendicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AprendicesService],
    }).compile();

    service = module.get<AprendicesService>(AprendicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
