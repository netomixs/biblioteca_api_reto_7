import { ApiProperty } from "@nestjs/swagger";
import { NivelUsuario } from "../../nivel-usuario/entities/nivel-usuario.entity";
import { Persona } from "../../persona/entities/persona.entity";
import { Prestamo } from "../../prestamo/entities/prestamo.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @ApiProperty({ description: '', required: true  })
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental
  @ApiProperty({ description: '', required: true  })
  @Column({ type: 'varchar', length: 255, unique: true })
  usuario: string;  // Nombre de usuario, debe ser único
  @ApiProperty({ description: '', required: true  })
  @Column({ type: 'text',nullable: false })
  password: string;  // Contraseña del empleado
  @ApiProperty({ description: '', required: true  })
  @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP'})
  fechaRegistro: Date;  // Fecha en la que el empleado fue registrado
  @ApiProperty({ description: '', required: true  })
  @Column({ type: 'varchar', length: 255, unique: true,nullable:false })
  claveEmpleado: string;  // Clave del empleado, debe ser única
  @ApiProperty({ description: '', required: true  })
  @OneToMany(() => Prestamo, prestamo => prestamo.usuarios)
  prestamos: Prestamo[];
  @ApiProperty({ description: '', required: false  })
  @ManyToOne(() => Persona, persona => persona.usuarios)
  persona?: Persona;  // Relación con la entidad Persona

  @ManyToOne(() => NivelUsuario, nivelUsuario => nivelUsuario.usuarios, { nullable: true })
  nivel?: NivelUsuario;  // Relación con la entidad NivelUsuario, puede ser nulo
}