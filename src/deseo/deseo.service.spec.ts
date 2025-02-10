import { Test, TestingModule } from '@nestjs/testing';
import { DeseoService } from './deseo.service';

describe('DeseoService', () => {
  let service: DeseoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeseoService],
    }).compile();

    service = module.get<DeseoService>(DeseoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
