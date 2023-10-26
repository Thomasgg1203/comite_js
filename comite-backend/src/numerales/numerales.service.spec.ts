import { Test, TestingModule } from '@nestjs/testing';
import { NumeralesService } from './numerales.service';

describe('NumeralesService', () => {
  let service: NumeralesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumeralesService],
    }).compile();

    service = module.get<NumeralesService>(NumeralesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
