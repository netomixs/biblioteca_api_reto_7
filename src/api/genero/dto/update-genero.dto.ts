import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGeneroDto } from './create-genero.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {
    @ApiProperty({ description: 'Codigo del genero', required: false })
    @IsString()
    @IsNotEmpty()
    @Length(3, 3)
    @IsOptional()
    codigo?: string;
    @ApiProperty({ description: 'Nombre del genero', required: false })
    @IsString()
    @IsNotEmpty()
    @Length(3, 250)
    @IsOptional()
    nombre?: string; 
}
