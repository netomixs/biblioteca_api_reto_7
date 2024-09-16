import { NivelUsuario } from "src/nivel-usuario/entities/nivel-usuario.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Prestamo } from "src/prestamo/entities/prestamo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental

  @Column({ type: 'varchar', length: 255, unique: true })
  usuario: string;  // Nombre de usuario, debe ser único

  @Column({ type: 'text' })
  password: string;  // Contraseña del empleado

  @Column({ type: 'datetime' })
  fechaRegistro: Date;  // Fecha en la que el empleado fue registrado

  @Column({ type: 'varchar', length: 255, unique: true })
  claveEmpleado: string;  // Clave del empleado, debe ser única
  
  @OneToMany(() => Prestamo, prestamo => prestamo.usuarios)
  prestamos: Prestamo[];  

  @ManyToOne(() => Persona, persona => persona.usuarios)
  persona: Persona;  // Relación con la entidad Persona

  @ManyToOne(() => NivelUsuario, nivelUsuario => nivelUsuario.usuarios, { nullable: true })
  nivel: NivelUsuario;  // Relación con la entidad NivelUsuario, puede ser nulo
}