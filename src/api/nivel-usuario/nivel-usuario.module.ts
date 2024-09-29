import { Module } from '@nestjs/common';
import { NivelUsuarioService } from './nivel-usuario.service';
import { NivelUsuarioController } from './nivel-usuario.controller';
import { NivelUsuario } from './entities/nivel-usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [NivelUsuarioController],
  providers: [NivelUsuarioService],
  imports: [TypeOrmModule.forFeature([NivelUsuario]),AuthModule]
})
export class NivelUsuarioModule {}
