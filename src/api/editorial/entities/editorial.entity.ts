import { ApiProperty } from "@nestjs/swagger";
import { Libro } from "../../libros/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental
  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  nombre: string;  // Nombre de la editorial, tipo varchar(255), no permite null
  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  pais: string;  // País de la editorial, tipo varchar(255), no permite null
  @ApiProperty()
  @OneToMany(() => Libro, libro => libro.editorial)
  libros: Libro; 
}