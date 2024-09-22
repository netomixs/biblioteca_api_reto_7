import { Autor } from '../../autor/entities/autor.entity';
import { Editorial } from '../../editorial/entities/editorial.entity';
import { Genero } from '../../genero/entities/genero.entity';
import { Prestamo } from '../../prestamo/entities/prestamo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ unique: true, })
    ISBN: string;

    @Column()
    Titulo: string;

    @Column()
    Fecha_Publicacion: string;

    @Column()
    Feha_Adquicicion: string;

    @Column()
    Existencias: Number;

    @Column()
    Es_Prestable: boolean;

    @Column()
    Codigo: string;

    @ManyToOne(() => Editorial, editorial => editorial.libros)
    editorial: Editorial;

    @ManyToMany(() => Autor, (autor) => autor.libros)
    @JoinTable()
    autores: Autor[];

    @ManyToMany(() => Genero, (genero) => genero.libros)
    @JoinTable()
    generos: Genero[];

    @OneToMany(() => Prestamo, prestamo => prestamo.libro)
    prestamos: Prestamo[];


}
