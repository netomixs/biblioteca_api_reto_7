import { Libro } from "../../libros/entities/libro.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {
    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental

    @Column({ type: 'char', length: 3, unique: true })
    codigo: string;  // Código de género, debe ser único

    @Column({ type: 'varchar', length: 255 })
    nombre: string;  // Nombre del género
    @ManyToMany(() => Libro, (libro) => libro.generos)
    libros: Libro[];
}
