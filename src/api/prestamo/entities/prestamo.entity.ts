import { ApiProperty } from "@nestjs/swagger";
import { Lector } from "../../lector/entities/lector.entity";
import { Libro } from "../../libros/entities/libro.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prestamo {
  @ApiProperty({ description: '', required: false  })
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental
  @ApiProperty({ description: '', required: false  })
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaInicio: Date;  // Fecha de inicio del préstamo
  @ApiProperty({ description: '', required: false  })
  @Column({ type: 'datetime' })
  fechaFin: Date;  // Fecha de fin del préstamo
  @ApiProperty({ description: '', required: false  })
  @Column({ type: 'datetime', nullable: true })
  fechaEntrega: Date | null;  // Fecha de entrega del préstamo, puede ser null
  @ApiProperty({ description: '', required: false  })
  @ManyToOne(() => Libro, libro => libro.prestamos)
  libro: Libro;  // Relación con la entidad Libro
  @ApiProperty({ description: '', required: false  })
  @ManyToOne(() => Lector, lector => lector.prestamos)
  lector: Lector;  // Relación con la entidad Lector
  @ApiProperty({ description: '', required: false  })
  @ManyToOne(() => Usuario, usuario => usuario.prestamos)
  usuarios: Usuario;  // Relación con la entidad Empleado
}
