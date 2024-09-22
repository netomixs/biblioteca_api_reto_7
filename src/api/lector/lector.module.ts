import { Module } from '@nestjs/common';
import { LectorService } from './lector.service';
import { LectorController } from './lector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lector } from './entities/lector.entity';

@Module({
  controllers: [LectorController],
  providers: [LectorService],
  imports:[TypeOrmModule.forFeature([Lector])]
})
export class LectorModule {}
