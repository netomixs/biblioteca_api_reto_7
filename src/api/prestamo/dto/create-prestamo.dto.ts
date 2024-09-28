import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsNumber } from "class-validator";
import { Lector } from "src/api/lector/entities/lector.entity";
import { Libro } from "src/api/libros/entities/libro.entity";
import { Usuario } from "src/api/usuario/entities/usuario.entity";

export class CreatePrestamoDto {
        @ApiProperty({ description: 'Fecha de vencimiento del prestamo', required: true  })
        @IsDate()
        @IsNotEmpty()
        fechaFin: Date;  // Fecha de fin del préstamo
        @ApiProperty({ description: 'Fecha en la que fue entregado el libro', required: false  })
        @IsDate()
        @IsOptional()
        fechaEntrega?: Date | null;  // Fecha de entrega del préstamo, puede ser nulo
        @ApiProperty({ description: 'Id del libro prestado', required: true  })
        @IsNumber()
        @IsNotEmpty()
        libro: Libro;  // ID del Libro relacionado
        @ApiProperty({ description: 'Id del lector ', required: false  })
        @IsNumber()
        @IsNotEmpty()
        lector: Lector;  // ID del Lector relacionado
        @ApiProperty({ description: 'Id del usuario que autorizo el prestamo', required: false  })
        @IsNumber()
        @IsNotEmpty()
        usuario: Usuario;  // ID del Usuario relacionado
}
