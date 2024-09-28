import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { RestriccionDiaGuard } from '../auth/guard/auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLibroDto } from '../libros/dto/create-libro.dto';
import { Autor } from './entities/autor.entity';

@ApiTags('autor')
@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) { }

  @ApiOperation({ summary: 'Crear un nuevo autor' })  // Descripción general de la operación
  @ApiBody({ type: CreateAutorDto })  // Indica a Swagger el tipo de cuerpo esperado
  @ApiResponse({ status: 201, description: 'El autor ha sido creado correctamente.',type:Autor })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  @Post()
  create(@Body() createAutorDto: CreateAutorDto):Promise<CreateAutorDto & Autor> {
    return this.autorService.create(createAutorDto);
  }
  @ApiOperation({ summary: 'Lista de autores' })  // Descripción general de la operación
  @ApiResponse({ status: 200, description: 'OK',type: [Autor] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<[Autor[], number]>  {
    return this.autorService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener a un autor por el id' })  // Descripción general de la operación
  @ApiResponse({ status: 200, description: 'OK',type: Autor })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar los datos segun los datos insertados' })  // Descripción general de la operación
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto);
  }
  @ApiOperation({ summary: 'Elimina a un autor por el Id' })  
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
