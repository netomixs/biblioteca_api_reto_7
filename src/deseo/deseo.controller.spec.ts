import { Test, TestingModule } from '@nestjs/testing';
import { DeseoController } from './deseo.controller';
import { DeseoService } from './deseo.service';

describe('DeseoController', () => {
  let controller: DeseoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeseoController],
      providers: [DeseoService],
    }).compile();

    controller = module.get<DeseoController>(DeseoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
