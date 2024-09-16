import { Module } from '@nestjs/common';
import { NivelUsuarioService } from './nivel-usuario.service';
import { NivelUsuarioController } from './nivel-usuario.controller';

@Module({
  controllers: [NivelUsuarioController],
  providers: [NivelUsuarioService],
})
export class NivelUsuarioModule {}
