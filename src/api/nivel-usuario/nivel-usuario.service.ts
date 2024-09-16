import { Injectable } from '@nestjs/common';
import { CreateNivelUsuarioDto } from './dto/create-nivel-usuario.dto';
import { UpdateNivelUsuarioDto } from './dto/update-nivel-usuario.dto';

@Injectable()
export class NivelUsuarioService {
  create(createNivelUsuarioDto: CreateNivelUsuarioDto) {
    return 'This action adds a new nivelUsuario';
  }

  findAll() {
    return `This action returns all nivelUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nivelUsuario`;
  }

  update(id: number, updateNivelUsuarioDto: UpdateNivelUsuarioDto) {
    return `This action updates a #${id} nivelUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} nivelUsuario`;
  }
}
