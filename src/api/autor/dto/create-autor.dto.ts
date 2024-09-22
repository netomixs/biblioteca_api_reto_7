import { IsNotEmpty, IsString, IsOptional, IsDate, Length, IsNumber } from 'class-validator';
import { Persona } from 'src/api/persona/entities/persona.entity';

export class CreateAutorDto {
    @IsString()
    @IsNotEmpty()
    codigo: string;  // Código para el autor

    @IsNumber()
    @IsNotEmpty()
    persona: Persona;
}
