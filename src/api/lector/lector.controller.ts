import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findAll() {
    return this.lectorService.findAll();
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
