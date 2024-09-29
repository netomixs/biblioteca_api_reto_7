import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [ApiModule,
     ConfigModule.forRoot({
    isGlobal: true, // Hace que el módulo esté disponible globalmente
  })],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {


}
