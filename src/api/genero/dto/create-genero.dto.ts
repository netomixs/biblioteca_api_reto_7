import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { LessThan } from "typeorm";

export class CreateGeneroDto {
    @ApiProperty({ description: 'Codigo del genero', required: true })
    @IsString()
    @IsNotEmpty()
    @Length(3, 3)
    codigo: string;
    @ApiProperty({ description: 'Nombre del genero', required: true })
    @IsString()
    @IsNotEmpty()
    @Length(3, 250)
    nombre: string; 
}
