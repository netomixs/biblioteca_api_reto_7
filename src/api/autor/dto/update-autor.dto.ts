import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAutorDto } from './create-autor.dto';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Persona } from 'src/api/persona/entities/persona.entity';
import { Optional } from '@nestjs/common';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {
    @ApiProperty({ description: 'Codigo del autor', required: false })  // Campo opcional
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    codigo?: string;  // Código para el autor
    @ApiProperty({ description: 'Id de la persona asociada al autor', required: false , example: 1}) 
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    persona?: Persona;
}
