import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamoService {
  constructor(@InjectRepository(Prestamo)
  private repository: Repository<Prestamo>) {

  }
  create(createPrestamoDto: CreatePrestamoDto) {
    return this.repository.save(createPrestamoDto);
  }

  findAll(page: number = 1, limit: number = 10): Promise<[Prestamo[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['libro', 'lector', 'usuario']
    });

  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { id: id }, relations:
        ['libro','lector','lector.persona','usuario','usuario.persona']
    });
  }

  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return this.repository.update(id,updatePrestamoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
