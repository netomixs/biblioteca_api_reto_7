import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsDate, Length, IsNumber } from 'class-validator';
import { Persona } from 'src/api/persona/entities/persona.entity';

export class UserLogin {
    @ApiProperty({ description: 'Usuario ', required: true })  // Campo opcional
    @IsString()
    @IsNotEmpty()
    usuario: string;  // Código para el autor
    @ApiProperty({ description: 'Id de la persona asociada al autor', required: true  }) 
    @IsString()
    @IsNotEmpty()
    password: string;
}
