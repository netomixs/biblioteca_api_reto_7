import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEditorialDto } from './create-editorial.dto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateEditorialDto extends PartialType(CreateEditorialDto) {
    @ApiProperty({ description: 'Nombre de la editorial', required: false })   
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nombre?: string;  // Nombre de la editorial
    @ApiProperty({ description: 'Pais de donde es la editorial', required: false })  
    @IsString() 
    @IsNotEmpty()
    @IsOptional()
    pais?: string;  // País de la editorial
}
