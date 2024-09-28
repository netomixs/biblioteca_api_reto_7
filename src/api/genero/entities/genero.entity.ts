import { ApiProperty } from "@nestjs/swagger";
import { Libro } from "../../libros/entities/libro.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental
    @ApiProperty()
    @Column({ type: 'char', length: 3, unique: true })
    codigo: string;  // Código de género, debe ser único
    @ApiProperty()
    @Column({ type: 'varchar', length: 255 })
    nombre: string;  // Nombre del género
    @ApiProperty()
    @ManyToMany(() => Libro, (libro) => libro.generos)
    libros: Libro[];
}
