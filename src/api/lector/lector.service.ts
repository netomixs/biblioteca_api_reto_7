import { Injectable } from '@nestjs/common';
import { CreateLectorDto } from './dto/create-lector.dto';
import { UpdateLectorDto } from './dto/update-lector.dto';

@Injectable()
export class LectorService {
  create(createLectorDto: CreateLectorDto) {
    return 'This action adds a new lector';
  }

  findAll() {
    return `This action returns all lector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lector`;
  }

  update(id: number, updateLectorDto: UpdateLectorDto) {
    return `This action updates a #${id} lector`;
  }

  remove(id: number) {
    return `This action removes a #${id} lector`;
  }
}
