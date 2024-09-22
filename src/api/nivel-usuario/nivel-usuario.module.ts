import { Module } from '@nestjs/common';
import { NivelUsuarioService } from './nivel-usuario.service';
import { NivelUsuarioController } from './nivel-usuario.controller';
import { NivelUsuario } from './entities/nivel-usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [NivelUsuarioController],
  providers: [NivelUsuarioService],
  imports: [TypeOrmModule.forFeature([NivelUsuario])]
})
export class NivelUsuarioModule {}
