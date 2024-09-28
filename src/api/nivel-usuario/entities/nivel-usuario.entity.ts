import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NivelUsuario {
    @ApiProperty({ description: 'ID Nivel de usuario', required: false  })  
    @PrimaryGeneratedColumn()
    id: number;  // Clave primaria auto-incremental
    @Column({ type: 'varchar', length: 255 })
    @ApiProperty({ description: 'Nombre del usuario', required: false  })  
    nombre: string;  // Nombre, tipo varchar(255)
    @ApiProperty({ description: 'Usuarios asociados', required: false  })  
    @OneToMany(() => Usuario, usuario => usuario.nivel)
    usuarios: Usuario[];  // Relación con la entidad Empleado
}
