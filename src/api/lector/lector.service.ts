import { Injectable } from '@nestjs/common';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';
import { Lector } from './entities/lector.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LectorService {
  constructor(
    @InjectRepository(Lector)
    private repository: Repository<Lector>,
  ) {

  }
  create(createLectorDto: CreateLectorDto) {
    return this.repository.save(createLectorDto);
  }
  findAll(page: number = 1, limit: number = 10): Promise<[Lector[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: [ 'persona' ]
    });
  }

  findOne(id: number) {
    return this.repository.findOne({where: {id: id},
    relations:['persona','prestamos','prestamos.libro']});
  }

  update(id: number, updateLectorDto: UpdateLectorDto) {
    return this.repository.update(id,updateLectorDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
