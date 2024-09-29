import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UpdatePasswordDto } from './dto/UpdatePasswordDto';
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {

  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.repository.create(createUsuarioDto);
    const saltRounds = 10;   
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
  async findByUserAndPassword(usuario:string,password:string): Promise<Usuario> {
    const saltRounds = 10;   
      const usuarioResult=await this.repository.findOne({
      where: { usuario:usuario },
      relations: ['persona','nivel'],
    })
    if(bcrypt.compare(password,usuarioResult.password)){
      return usuarioResult
    }
    return null;
  }
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UpdateResult> {
 
    if(updateUsuarioDto.password){
      const saltRounds = 10; 
      updateUsuarioDto.password = await bcrypt.hash(updateUsuarioDto.password, saltRounds);
    }
 
    return this.repository.update(id, updateUsuarioDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
 
}
