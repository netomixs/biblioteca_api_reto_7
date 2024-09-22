import { Injectable } from '@nestjs/common';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Editorial } from './entities/editorial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EditorialService {
  constructor(
    @InjectRepository(Editorial)
    private repository: Repository<Editorial>,
  ) {

  }
  create(createEditorialDto: CreateEditorialDto) {
    return this.repository.save(createEditorialDto);
  }

  findAll(page: number = 1, limit: number = 10): Promise<[Editorial[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
  }
  findOne(id: number) {
    return this.repository.findOne({ where: { id: id } });
  }

  update(id: number, updateEditorialDto: UpdateEditorialDto) {
    return this.repository.update(id, updateEditorialDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
