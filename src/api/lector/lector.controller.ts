import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LectorService } from './lector.service';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';

@Controller('lector')
export class LectorController {
  constructor(private readonly lectorService: LectorService) {}

  @Post()
  create(@Body() createLectorDto: CreateLectorDto) {
    return this.lectorService.create(createLectorDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.lectorService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectorDto: UpdateLectorDto) {
    return this.lectorService.update(+id, updateLectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectorService.remove(+id);
  }
}
