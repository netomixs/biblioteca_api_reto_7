import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { Genero } from './entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [GeneroController],
  providers: [GeneroService],
  imports: [TypeOrmModule.forFeature([Genero]),AuthModule],
})
export class GeneroModule { }
