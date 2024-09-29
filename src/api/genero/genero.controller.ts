import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateEditorialDto } from '../editorial/dto/update-editorial.dto';
import { Genero } from './entities/genero.entity';
import { JwtAuthGuard } from '../auth/guard/auth.guard';
@UseGuards(JwtAuthGuard)
@ApiTags('genero')
@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) { }
  @ApiOperation({ summary: 'Crea un nuevo genero' })  
  @ApiBody({ type: CreateGeneroDto }) 

  @ApiResponse({ status: 200, description: 'OK',type:CreateGeneroDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }
  @ApiOperation({ summary: 'Lista de generos disponibles' })  
  @ApiResponse({ status: 200, description: 'OK',type:[Genero] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.generoService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Informacion del genero por id y lista de libros relacionados' })  
  @ApiResponse({ status: 200, description: 'OK',type:Genero })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualiza la informacion del genero ' }) 
  @ApiBody({ type: UpdateGeneroDto })  
  @ApiResponse({ status: 200, description: 'OK',type:UpdateGeneroDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.update(+id, updateGeneroDto);
  }
  @ApiOperation({ summary: 'Eliminar genero por Id' })  
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.remove(+id);
  }
}
