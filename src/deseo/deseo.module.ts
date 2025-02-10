import { Module } from '@nestjs/common';
import { DeseoService } from './deseo.service';
import { DeseoController } from './deseo.controller';

@Module({
  controllers: [DeseoController],
  providers: [DeseoService],
})
export class DeseoModule {}
