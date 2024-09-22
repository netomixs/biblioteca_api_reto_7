import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
/**
 * Service para persona
 */
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private usersRepository: Repository<Persona>,
  ) { }

  /**
   * Insercion de una persona
   * @param createPersonaDto Datos a insertar
   * @returns {Promise<CreatePersonaDto>} Datos insertados
   */
  create(
    createPersonaDto: CreatePersonaDto): Promise<CreatePersonaDto> {
    const persona = this.usersRepository.save(createPersonaDto);
    return persona;
  }
  /**
   * Recupera todas las personas
   * @param page pagina que se quiere consultar
   * @param limit tamaño de pagina que se quiere consultar
   * @returns {Promise<[Persona[], number]>} Resultado de la busqueda
   */
  findAll(page: number = 1, limit: number = 10): Promise<[Persona[], number]> {
    return this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

  }
  /**
   * Recupera datos de una persona por Id
   * @param id Id de las persona
   * @returns {Promise<Persona> }
   */
  findOne(id: number): Promise<Persona> {
    return this.usersRepository.findOne({ where: { id } });
  }
  /**
   * Actualiza los datos de una persona
   * @param id Id de la persona
   * @param updatePersonaDto Datos a actualizar
   * @returns {Promise<UpdateResult> } Resultado de la eliminacion
   */
  update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<UpdateResult> {
    return this.usersRepository.update(id, updatePersonaDto);
  }
  /**
   * Elimina informacion de la persona
   * @param id Id del dato a eliminar
   * @returns {Promise<DeleteResult>} Resultados de eliminacion
   */
  remove(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
