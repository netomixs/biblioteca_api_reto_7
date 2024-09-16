import { Libro } from "src/libros/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental

  @Column({ type: 'varchar', length: 255 })
  nombre: string;  // Nombre de la editorial, tipo varchar(255), no permite null

  @Column({ type: 'varchar', length: 255 })
  pais: string;  // País de la editorial, tipo varchar(255), no permite null

  @OneToMany(() => Libro, libro => libro.editorial)
  libros: Libro; 
}