import { ApiProperty } from "@nestjs/swagger";
import { Autor } from "../../autor/entities/autor.entity";
import { Lector } from "../../lector/entities/lector.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Persona {
  @ApiProperty({ description: '', required: false })
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental
  @ApiProperty({ description: '', required: false })
  @Column({ type: 'varchar', length: 255 })
  nombre: string;  // Nombre, tipo varchar(255), no permite null
  @ApiProperty({ description: '', required: false })
  @Column({ type: 'varchar', length: 255 })
  apellidoP: string;  // Apellido paterno, tipo varchar(255), no permite null
  @ApiProperty({ description: '', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  apellidoM: string | null;  // Apellido materno, opcional (nullable)
  @ApiProperty({ description: '', required: false })
  @Column({ type: 'date' })
  nacimiento: Date;  // Fecha de nacimiento, tipo date, no permite null
  @ApiProperty({ description: '', required: false })
  @Column({ type: 'varchar', length: 1 })  // Suposición: sexo es un campo varchar de longitud 1 (M/F)
  sexo: string;  // Sexo, tipo varchar(1), no permite null
  @ApiProperty({ description: '', required: false })
  @OneToMany(() => Autor, autor => autor.persona)
  autores: Autor[];
  @ApiProperty({ description: '', required: false })
  @OneToMany(() => Lector, lector => lector.persona)
  lectores: Lector[];
  @ApiProperty({ description: '', required: false })
  @OneToMany(() => Usuario, empleado => empleado.persona)
  usuarios: Usuario[];
}

