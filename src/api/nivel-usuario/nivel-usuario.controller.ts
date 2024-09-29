import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NivelUsuarioService } from './nivel-usuario.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/auth.guard';
@UseGuards(JwtAuthGuard)
@ApiTags('nivel-usuario')
@Controller('nivel-usuario')
export class NivelUsuarioController {
  constructor(private readonly nivelUsuarioService: NivelUsuarioService) {}

  @Get()
  findAll() {
    return this.nivelUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelUsuarioService.findOne(+id);
  }

 
}
