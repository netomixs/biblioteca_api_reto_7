import { ApiProperty } from '@nestjs/swagger';
import { Autor } from '../../autor/entities/autor.entity';
import { Editorial } from '../../editorial/entities/editorial.entity';
import { Genero } from '../../genero/entities/genero.entity';
import { Prestamo } from '../../prestamo/entities/prestamo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
@Entity()
export class Libro {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    Id: number;
    @ApiProperty()
    @Column({ unique: true, })
    ISBN: string;
    @ApiProperty()
    @Column()
    Titulo: string;
    @ApiProperty()
    @Column()
    Fecha_Publicacion: string;
    @ApiProperty()
    @Column()
    Feha_Adquicicion: string;
    @ApiProperty()
    @Column()
    Existencias: Number;
    @ApiProperty()
    @Column()
    Es_Prestable: boolean;
    @ApiProperty()
    @Column()
    Codigo: string;
    @ApiProperty()
    @ManyToOne(() => Editorial, editorial => editorial.libros)
    editorial: Editorial;
    @ApiProperty()
    @ManyToMany(() => Autor, (autor) => autor.libros)
    @JoinTable()
    autores: Autor[];
    @ApiProperty()
    @ManyToMany(() => Genero, (genero) => genero.libros)
    @JoinTable()
    generos: Genero[];
    @ApiProperty()
    @OneToMany(() => Prestamo, prestamo => prestamo.libro)
    prestamos: Prestamo[];


}
