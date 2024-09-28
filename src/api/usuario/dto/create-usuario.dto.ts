import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { NivelUsuario } from "src/api/nivel-usuario/entities/nivel-usuario.entity";
import { Persona } from "src/api/persona/entities/persona.entity";


export class CreateUsuarioDto {
    @ApiProperty({ description: '', required: true  })
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    usuario: string;
    @ApiProperty({ description: '', required: true  })
    @IsString()
    @IsNotEmpty()
    password: string;
    @ApiProperty({ description: '', required: true  })
    @IsNotEmpty()
    @IsString()
    @Length(5, 5)
    claveEmpleado: string  ;
    @ApiProperty({ description: '', required: false  })
    @IsNumber()
    @IsNotEmpty()
    persona?: Persona;  // ID de la Persona relacionada
    @ApiProperty({ description: '', required: false  })
    @IsNumber()
    @IsOptional()
    nivel?: NivelUsuario;  // ID del NivelUsuario (opcional)
}