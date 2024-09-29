import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { LectorService } from './lector.service';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Lector } from './entities/lector.entity';
import { JwtAuthGuard } from '../auth/guard/auth.guard';
@ApiTags('lector')
@Controller('lector')
@UseGuards(JwtAuthGuard)
export class LectorController {
  constructor(private readonly lectorService: LectorService) { }
  @ApiOperation({ summary: 'Insertar nuevo lector ' })  
  @ApiBody({ type: CreateLectorDto }) 
  @ApiResponse({ status: 200, description: 'OK',type:CreateLectorDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createLectorDto: CreateLectorDto) {
    return this.lectorService.create(createLectorDto);
  }
  @ApiOperation({ summary: 'Lista de lectores' })  
  @ApiResponse({ status: 200, description: 'OK',type:[Lector] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.lectorService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener lector por Id' })  
  @ApiResponse({ status: 200, description: 'OK',type:Lector })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectorService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar lector' })  
  @ApiResponse({ status: 200, description: 'OK',type:UpdateLectorDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @ApiBody({ type: UpdateLectorDto }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectorDto: UpdateLectorDto) {
    return this.lectorService.update(+id, updateLectorDto);
  }
  @ApiOperation({ summary: 'Eliminar lector por id' })  
  @ApiResponse({ status: 200, description: 'OK'  })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectorService.remove(+id);
  }
}
