import { Test, TestingModule } from '@nestjs/testing';
import { NivelUsuarioController } from './nivel-usuario.controller';
import { NivelUsuarioService } from './nivel-usuario.service';

describe('NivelUsuarioController', () => {
  let controller: NivelUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NivelUsuarioController],
      providers: [NivelUsuarioService],
    }).compile();

    controller = module.get<NivelUsuarioController>(NivelUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
