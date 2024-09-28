import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Length, IsOptional, IsDate } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty({ description: 'Nombre de la persona', required: true  })  
    @IsString()
    @IsNotEmpty()
    @Length(1, 255)
    nombre: string;
    @ApiProperty({ description: 'Apellido paterno de la persona',
       required: true  })  
    @IsString()
    @IsNotEmpty()
    @Length(1, 255)
    apellidoP: string;
    @ApiProperty({ description: 'Apellido materno de la persona',
       required: false  })
    @IsString()
    @IsOptional()  // Este campo es opcional
    @Length(0, 255)
    apellidoM?: string;
  
    @ApiProperty({ description: 'Fecha de nacimiento de la persona', required: false  })
    @IsNotEmpty()
    nacimiento: Date;
    @ApiProperty({ description: 'Sexo de la persona', required: false  })
    @IsString()
    @IsNotEmpty()
    @Length(1, 1)  // Restricción de longitud para 1 carácter (e.g., M o F)
    sexo: string;
  }
