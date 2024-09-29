import { Module } from '@nestjs/common';
import { LectorService } from './lector.service';
import { LectorController } from './lector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lector } from './entities/lector.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [LectorController],
  providers: [LectorService],
  imports:[TypeOrmModule.forFeature([Lector]),AuthModule]
})
export class LectorModule {}
