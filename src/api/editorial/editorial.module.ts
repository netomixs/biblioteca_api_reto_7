import { Module } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialController } from './editorial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './entities/editorial.entity';

@Module({
  controllers: [EditorialController],
  providers: [EditorialService],
  imports:[TypeOrmModule.forFeature([Editorial])]
})
export class EditorialModule {}
