import { Lector } from "../../lector/entities/lector.entity";
import { Libro } from "../../libros/entities/libro.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;  // Clave primaria auto-incremental

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaInicio: Date;  // Fecha de inicio del préstamo

  @Column({ type: 'datetime' })
  fechaFin: Date;  // Fecha de fin del préstamo

  @Column({ type: 'datetime', nullable: true })
  fechaEntrega: Date | null;  // Fecha de entrega del préstamo, puede ser null

  @ManyToOne(() => Libro, libro => libro.prestamos)
  libro: Libro;  // Relación con la entidad Libro

  @ManyToOne(() => Lector, lector => lector.prestamos)
  lector: Lector;  // Relación con la entidad Lector

  @ManyToOne(() => Usuario, usuario => usuario.prestamos)
  usuarios: Usuario;  // Relación con la entidad Empleado
}
