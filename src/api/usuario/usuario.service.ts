import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {

  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.repository.create(createUsuarioDto);
    const saltRounds = 10;  // Número de rondas para generar la "sal"
    usuario.password = await bcrypt.hash(createUsuarioDto.password, saltRounds);
    return await this.repository.save(usuario);


  }

  findAll(page: number = 1, limit: number = 10): Promise<[Usuario[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations:['nivel']
    });
  }

  findOne(id: number): Promise<Usuario> {
    return this.repository.findOne({
      where: { id },
      relations: ['persona','nivel'],
    });
  }
  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UpdateResult> {
    return this.repository.update(id, updateUsuarioDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
