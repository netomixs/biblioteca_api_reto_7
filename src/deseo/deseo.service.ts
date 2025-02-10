import { Injectable } from '@nestjs/common';
import { CreateDeseoDto } from './dto/create-deseo.dto';
import { UpdateDeseoDto } from './dto/update-deseo.dto';

@Injectable()
export class DeseoService {
  create(createDeseoDto: CreateDeseoDto) {
    return 'This action adds a new deseo';
  }

  findAll() {
    return `This action returns all deseo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deseo`;
  }

  update(id: number, updateDeseoDto: UpdateDeseoDto) {
    return `This action updates a #${id} deseo`;
  }

  remove(id: number) {
    return `This action removes a #${id} deseo`;
  }
}
