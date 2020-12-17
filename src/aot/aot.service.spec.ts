import { Test, TestingModule } from '@nestjs/testing';
import { AotService } from './aot.service';

describe('AotService', () => {
  let service: AotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AotService],
    }).compile();

    service = module.get<AotService>(AotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
