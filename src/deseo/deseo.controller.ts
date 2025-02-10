import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeseoService } from './deseo.service';
import { CreateDeseoDto } from './dto/create-deseo.dto';
import { UpdateDeseoDto } from './dto/update-deseo.dto';

@Controller('deseo')
export class DeseoController {
  constructor(private readonly deseoService: DeseoService) {}

  @Post()
  create(@Body() createDeseoDto: CreateDeseoDto) {

 
    return this.deseoService.create(createDeseoDto);
  }

  @Get()
  findAll() {
    return this.deseoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deseoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeseoDto: UpdateDeseoDto) {
    return this.deseoService.update(+id, updateDeseoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deseoService.remove(+id);
  }
}
