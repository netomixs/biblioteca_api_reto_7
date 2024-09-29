import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private repository: Repository<Libro>,
  ) {

  }
  create(createLibroDto: CreateLibroDto) {
    return this.repository.save(createLibroDto);
  }

  findAll(page: number = 1, limit: number = 10): Promise<[Libro[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['editorial', 'autores', 'autores.persona', 'generos']
    });
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { Id: id },
      relations: ['editorial', 'autores', 'autores.persona', 'generos', 'prestamos']
    });
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return this.repository.update(id, updateLibroDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
