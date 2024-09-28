import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLibroDto } from '../libros/dto/create-libro.dto';
import { Prestamo } from './entities/prestamo.entity';
import { UpdateResult } from 'typeorm';
@ApiTags('prestamo')
@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}
  @ApiOperation({ summary: 'Insertar un prestamo' })
  @ApiBody({ type: CreatePrestamoDto })
  @ApiResponse({ status: 200, description: 'OK', type: CreatePrestamoDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createPrestamoDto: CreatePrestamoDto) {
    return this.prestamoService.create(createPrestamoDto);
  }
  @ApiOperation({ summary: 'Obtener una lista de prestamos' })
  @ApiResponse({ status: 200, description: 'OK', type: [Prestamo] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
 
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.prestamoService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener prestamo por Id' })
  @ApiResponse({ status: 200, description: 'OK', type: Prestamo })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestamoDto: UpdatePrestamoDto):Promise<UpdateResult> {
    return this.prestamoService.update(+id, updatePrestamoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoService.remove(+id);
  }
}
