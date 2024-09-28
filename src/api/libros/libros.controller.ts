import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Libro } from './entities/libro.entity';
@ApiTags('libro')
@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) { }
  @ApiOperation({ summary: 'Insertar un libro' })
  @ApiBody({ type: CreateLibroDto })
  @ApiResponse({ status: 200, description: 'OK', type: CreateLibroDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }
  @ApiOperation({ summary: 'Obtener una lista de libros' })
  @ApiResponse({ status: 200, description: 'OK', type: [Libro] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.librosService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener informacion sobre un libro por Id' })
  @ApiResponse({ status: 200, description: 'OK', type: Libro })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.librosService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar libro por Id' })
  @ApiBody({ type: UpdateLibroDto })
  @ApiResponse({ status: 200, description: 'OK', type: Libro })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.librosService.update(+id, updateLibroDto);
  }
  @ApiOperation({ summary: 'Eliminar libro por Id' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.librosService.remove(+id);
  }
}
