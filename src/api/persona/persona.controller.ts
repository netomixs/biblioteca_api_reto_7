import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { query } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLibroDto } from '../libros/dto/create-libro.dto';
import { Persona } from './entities/persona.entity';
import { JwtAuthGuard } from '../auth/guard/auth.guard';
@ApiTags('persona')
@Controller('persona')
@UseGuards(JwtAuthGuard)
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }
  @ApiOperation({ summary: 'Insertar una persona' })
  @ApiBody({ type: CreatePersonaDto })
  @ApiResponse({ status: 200, description: 'OK', type: CreatePersonaDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }
  @ApiOperation({ summary: 'Obtener datos de todas las personas registradas' })
  @ApiResponse({ status: 200, description: 'OK', type: [Persona] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.personaService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener datos de una persona por ID' })
  @ApiResponse({ status: 200, description: 'OK', type: [Persona] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar persona por Id' })
  @ApiBody({ type: UpdatePersonaDto })
  @ApiResponse({ status: 200, description: 'OK', type: UpdatePersonaDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }
  @ApiOperation({ summary: 'Eliminar persona por Id' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}
