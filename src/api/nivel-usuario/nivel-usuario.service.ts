import { Injectable } from '@nestjs/common';
import { CreateNivelUsuarioDto } from './dto/create-nivel-usuario.dto';
import { UpdateNivelUsuarioDto } from './dto/update-nivel-usuario.dto';
import { NivelUsuario } from './entities/nivel-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NivelUsuarioService {
  constructor(
    @InjectRepository(NivelUsuario)
    private repository: Repository<NivelUsuario>,
  ) { }

  findAll(): Promise<NivelUsuario[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });;
  }

  update(id: number, updateNivelUsuarioDto: UpdateNivelUsuarioDto) {
    return this.repository.update(id, updateNivelUsuarioDto);
  }

 
}
