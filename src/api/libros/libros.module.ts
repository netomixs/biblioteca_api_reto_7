import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports:[TypeOrmModule.forFeature([Libro]),AuthModule]
})
export class LibrosModule {}
