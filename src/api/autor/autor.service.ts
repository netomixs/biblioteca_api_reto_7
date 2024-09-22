import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private repository: Repository<Autor>,
  ) { }
  create(createAutorDto: CreateAutorDto) {
    const autor = this.repository.save(createAutorDto);
    return autor;
  }

  findAll(page: number = 1, limit: number = 10): Promise<[Autor[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ["persona"]
    });

  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id: id }, relations: ["persona", "libros"] });
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return this.repository.update(id, updateAutorDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
