import { Module } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialController } from './editorial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './entities/editorial.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [EditorialController],
  providers: [EditorialService],
  imports:[TypeOrmModule.forFeature([Editorial]),AuthModule]
})
export class EditorialModule {}
