import { Autor } from "src/autor/entities/autor.entity";
import { Lector } from "src/lector/entities/lector.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental
  
    @Column({ type: 'varchar', length: 255 })
    nombre: string;  // Nombre, tipo varchar(255), no permite null
  
    @Column({ type: 'varchar', length: 255 })
    apellidoP: string;  // Apellido paterno, tipo varchar(255), no permite null
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    apellidoM: string | null;  // Apellido materno, opcional (nullable)
  
    @Column({ type: 'date' })
    nacimiento: Date;  // Fecha de nacimiento, tipo date, no permite null
  
    @Column({ type: 'varchar', length: 1 })  // Suposición: sexo es un campo varchar de longitud 1 (M/F)
    sexo: string;  // Sexo, tipo varchar(1), no permite null

   @OneToMany(() => Autor, autor => autor.persona)
    autores: Autor[];  

    @OneToMany(() => Lector, lector => lector.persona)
    lectores: Lector[];  

    @OneToMany(() => Usuario, empleado => empleado.persona)
    usuarios: Usuario[]; 
  }
 
