import { ApiProperty } from "@nestjs/swagger";
import { Libro } from "../../libros/entities/libro.entity";
import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;  // Clave primaria auto-incremental
    @ApiProperty()
    @Column({ type: 'varchar', length: 255 })
    codigo: string;  // Código para autor
    @ManyToOne(() => Persona, persona => persona.autores)
    @ApiProperty()
    persona: Persona;  // Relación con la entidad Person 
    @ApiProperty()
    @ManyToMany(() => Libro, (libro) => libro.autores)
    libros: Libro[]; // Relación con la entidad Libro 
}
