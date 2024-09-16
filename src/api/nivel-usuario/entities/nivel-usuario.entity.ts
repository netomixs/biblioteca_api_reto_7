import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NivelUsuario {
    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental

    @Column({ type: 'varchar', length: 255 })
    nombre: string;  // Nombre, tipo varchar(255)
    @OneToMany(() => Usuario, usuario => usuario.nivel)
    usuarios: Usuario[];  // Relación con la entidad Empleado
}
