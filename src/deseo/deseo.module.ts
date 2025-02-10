import { Module } from '@nestjs/common';
import { DeseoService } from './deseo.service';
import { DeseoController } from './deseo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deseo } from './entities/deseo.entity';

@Module({
  controllers: [DeseoController],
  providers: [DeseoService],
  imports: [TypeOrmModule.forFeature([Deseo])],
  exports: [DeseoService],
})
export class DeseoModule {}
