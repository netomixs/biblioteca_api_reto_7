import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';

@Module({
  imports: [    ApiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
