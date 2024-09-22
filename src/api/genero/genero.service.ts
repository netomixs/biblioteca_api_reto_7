import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private repository: Repository<Genero>,
  ) {

  }
  create(createGeneroDto: CreateGeneroDto) {
    return this.repository.save(createGeneroDto);
  }

  findAll(page: number = 1, limit: number = 10): Promise<[Genero[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit
  
    });
  }

  findOne(id: number) {
    return this.repository.findOne({where: {id: id},
    relations:['libros']})
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return this.repository.update(id,updateGeneroDto);
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
