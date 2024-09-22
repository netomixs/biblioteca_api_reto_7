import { Autor } from "../../autor/entities/autor.entity";
import { Persona } from "../../persona/entities/persona.entity";
import { Prestamo } from "../../prestamo/entities/prestamo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lector {
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental

  @Column({ type: 'char', length: 18, unique: true })
  udi: string;  // UDI, tipo char(18), no permite null, debe ser único

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaInscripcion: Date;  // Fecha de inscripción, tipo date, no permite null

  @ManyToOne(() => Persona, person => person.lectores)
  persona: Persona;  // Relación con la entidad Person
  @OneToMany(() => Prestamo, prestamo => prestamo.lector)
  prestamos: Prestamo[];  // Relación con la entidad Prestamo

}