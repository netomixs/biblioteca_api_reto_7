import { Body, Controller, Get, NotFoundException, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAutorDto } from '../autor/dto/create-autor.dto';
import { Autor } from '../autor/entities/autor.entity';
import { UserLogin } from './dto/user-credentials.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @ApiOperation({ summary: 'Obtener token para acceder' })  // Descripción general de la operación
  @ApiBody({ type: UserLogin })  // Indica a Swagger el tipo de cuerpo esperado
  @ApiResponse({ status: 200, description: 'Token generado correctmente' })
  @ApiResponse({ status: 400, description: ' No se encontro el usuario con las credenciales ingresadas' })
  @ApiResponse({ status: 500, description: ' Error del servidor' })
  @Post( )
  async login(@Body() user:UserLogin) {
   const token = await this.authService.getJWT(user);
   if (token) {
    return token;
   }else{
    throw new NotFoundException('Usuario no encontrado o credenciales incorrectas');

   }
  
  }
  @Get( )
  @ApiOperation({ summary: 'Validar token' })  // Descripción general de la operación// Indica a Swagger el tipo de cuerpo esperado
  @ApiResponse({ status: 200, description: 'Validado' })
  @ApiResponse({ status: 400, description: 'No valido' })
  @ApiResponse({ status: 500, description: ' Error del servidor' })
  async validar(@Query("token") token:string) {
     const response = await this.authService.validateToken(token);
    if (response) {
     return response;
    }else{
     throw new NotFoundException('Token no valido');
 
    }
   
   }
}