import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule  } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './guard/auth.guard';
 
  
@Module({
  controllers: [AuthController],
  imports: [
    UsuarioModule,  
    JwtModule.register({
      secret: 'secretKey', // Cambia esto a una variable de entorno en producción
      signOptions: { expiresIn: '60m' },  
    }),
  ],
  providers: [AuthService,JwtAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
