import { Injectable } from '@nestjs/common';
import { NivelUsuario } from './entities/nivel-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Libro } from '../libros/entities/libro.entity';

@Injectable()
export class NivelUsuarioService {
  constructor(
    @InjectRepository(NivelUsuario)
    private repository: Repository<NivelUsuario>,
  ) { }
  @ApiOperation({ summary: 'Obtener todos los tipos de usuario' })
  @ApiResponse({ status: 200, description: 'OK', type: [NivelUsuario] })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  findAll(): Promise<NivelUsuario[]> {
    return this.repository.find();
  }
  @ApiOperation({ summary: 'Obtener el tipo de usuario por Id' })
  @ApiResponse({ status: 200, description: 'OK', type:NivelUsuario })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  findOne(id: number) {
    return this.repository.findOne({ where: { id },relations:['usuarios'] });;
  }
 

 
}
