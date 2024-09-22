import { IsString, IsNotEmpty, IsDate, IsOptional, Length } from "class-validator";
import { Persona } from "src/api/persona/entities/persona.entity";

export class CreateLectorDto {
    @IsString()
    @IsNotEmpty()
    @Length(18,18)
    udi: string;  // UDI del lector (char(18), único)

    @IsOptional()
    persona?: Persona;  // ID de la persona relacionada (opcional)
}
