import { Libro } from "../../libros/entities/libro.entity";
import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental

    @Column({ type: 'varchar', length: 255 })
    codigo: string;  // Código para autor
    @ManyToOne(() => Persona, persona => persona.autores)
    persona: Persona;  // Relación con la entidad Person 

    @ManyToMany(() => Libro, (libro) => libro.autores)
    libros: Libro[]; // Relación con la entidad Libro 
}
