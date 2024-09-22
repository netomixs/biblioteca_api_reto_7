import { IsDate, IsNotEmpty, IsOptional, IsNumber } from "class-validator";
import { Lector } from "src/api/lector/entities/lector.entity";
import { Libro } from "src/api/libros/entities/libro.entity";
import { Usuario } from "src/api/usuario/entities/usuario.entity";

export class CreatePrestamoDto {
        @IsDate()
        @IsNotEmpty()
        fechaFin: Date;  // Fecha de fin del préstamo
    
        @IsDate()
        @IsOptional()
        fechaEntrega?: Date | null;  // Fecha de entrega del préstamo, puede ser nulo
    
        @IsNumber()
        @IsNotEmpty()
        libro: Libro;  // ID del Libro relacionado
    
        @IsNumber()
        @IsNotEmpty()
        lector: Lector;  // ID del Lector relacionado
    
        @IsNumber()
        @IsNotEmpty()
        usuario: Usuario;  // ID del Usuario relacionado
}
