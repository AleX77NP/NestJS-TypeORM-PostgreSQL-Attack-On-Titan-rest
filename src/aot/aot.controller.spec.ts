import { Test, TestingModule } from '@nestjs/testing';
import { AotController } from './aot.controller';

describe('AotController', () => {
  let controller: AotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AotController],
    }).compile();

    controller = module.get<AotController>(AotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
