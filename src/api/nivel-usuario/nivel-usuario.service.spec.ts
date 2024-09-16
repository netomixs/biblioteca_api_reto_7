import { Test, TestingModule } from '@nestjs/testing';
import { NivelUsuarioService } from './nivel-usuario.service';

describe('NivelUsuarioService', () => {
  let service: NivelUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NivelUsuarioService],
    }).compile();

    service = module.get<NivelUsuarioService>(NivelUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
