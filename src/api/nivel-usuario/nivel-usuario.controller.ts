import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NivelUsuarioService } from './nivel-usuario.service';
import { CreateNivelUsuarioDto } from './dto/create-nivel-usuario.dto';
import { UpdateNivelUsuarioDto } from './dto/update-nivel-usuario.dto';

@Controller('nivel-usuario')
export class NivelUsuarioController {
  constructor(private readonly nivelUsuarioService: NivelUsuarioService) {}

  @Post()
  create(@Body() createNivelUsuarioDto: CreateNivelUsuarioDto) {
    return this.nivelUsuarioService.create(createNivelUsuarioDto);
  }

  @Get()
  findAll() {
    return this.nivelUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNivelUsuarioDto: UpdateNivelUsuarioDto) {
    return this.nivelUsuarioService.update(+id, updateNivelUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nivelUsuarioService.remove(+id);
  }
}
