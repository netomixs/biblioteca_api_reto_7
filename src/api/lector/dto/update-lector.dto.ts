import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLectorDto } from './create-lector.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { Persona } from 'src/api/persona/entities/persona.entity';
import { Optional } from '@nestjs/common';

export class UpdateLectorDto extends PartialType(CreateLectorDto) {
    @ApiProperty({ description: 'Numero de identificacion 18 digitos', required: true })   
    @IsString()
    @IsNotEmpty()
    @Length(18,18)
    @IsOptional() 
    udi?: string;  // UDI del lector (char(18), único)
    @ApiProperty({ description: 'Id de la persona asosiada', required: true })   
    @IsOptional()
    @IsOptional() 
    persona?: Persona;  // ID de la persona relacionada (opcional)
}
