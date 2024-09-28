import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsDate, Length, IsNumber } from 'class-validator';
import { Persona } from 'src/api/persona/entities/persona.entity';

export class CreateAutorDto {
    @ApiProperty({ description: 'Codigo del autor', required: true })  // Campo opcional
    @IsString()
    @IsNotEmpty()
    codigo: string;  // Código para el autor
    @ApiProperty({ description: 'Id de la persona asociada al autor', required: true , example: 1}) 
    @IsNumber()
    @IsNotEmpty()
    persona: Persona;
}
