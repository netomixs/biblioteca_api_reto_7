import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Editorial } from './entities/editorial.entity';
import { DeleteResult } from 'typeorm';
@ApiTags('editorial')
@Controller('editorial')
export class EditorialController {
  constructor(private readonly editorialService: EditorialService) {}
  @ApiOperation({ summary: 'Crear una nueva editorial' })  
  @ApiBody({ type: CreateEditorialDto }) 
  @ApiResponse({ status: 200, description: 'OK',type:Editorial })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Post()
  create(@Body() createEditorialDto: CreateEditorialDto) {
    return this.editorialService.create(createEditorialDto);
  }
  @ApiOperation({ summary: 'Lista de edioriales' })  
  @ApiResponse({ status: 200, description: 'OK',type:[Editorial] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.editorialService.findAll(page, limit);
  }
  @ApiOperation({ summary: 'Obtener una editorial por id' })  
  @ApiResponse({ status: 200, description: 'OK',type:Editorial })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorialService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualiza los datos de editorial' })  
  @ApiBody({ type: UpdateEditorialDto }) 
  @ApiResponse({ status: 200, description: 'OK',type:UpdateEditorialDto })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEditorialDto: UpdateEditorialDto) {
    return this.editorialService.update(+id, updateEditorialDto);
  }
  @ApiOperation({ summary: 'Elimina editorial por Id' })  
  @ApiResponse({ status: 200, description: 'OK'  })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorialService.remove(+id);
  }
}
