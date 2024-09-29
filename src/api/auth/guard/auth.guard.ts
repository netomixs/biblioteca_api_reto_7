import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService, // Inyecta tu AuthService para usar validateToken
 
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('No se encontró el encabezado de autorización');
    }

    const token = authHeader.split(' ')[1];  
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const decoded = await this.authService.validateToken(token);   token
    if (!decoded) {
      throw new UnauthorizedException('Token no válido o expirado');
    }

    request.user = decoded;  
    return true;
  }
}