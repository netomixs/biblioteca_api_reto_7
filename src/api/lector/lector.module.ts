import { Module } from '@nestjs/common';
import { LectorService } from './lector.service';
import { LectorController } from './lector.controller';

@Module({
  controllers: [LectorController],
  providers: [LectorService],
})
export class LectorModule {}
