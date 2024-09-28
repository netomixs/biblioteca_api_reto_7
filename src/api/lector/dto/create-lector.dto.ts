import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsDate, IsOptional, Length } from "class-validator";
import { Persona } from "src/api/persona/entities/persona.entity";

export class CreateLectorDto {
    @ApiProperty({ description: 'Numero de identificacion 18 digitos', required: true })   
    @IsString()
    @IsNotEmpty()
    @Length(18,18)
    udi: string;  // UDI del lector (char(18), único)
    @ApiProperty({ description: 'Id de la persona asosiada', required: true  })   
    @IsOptional()
    persona?: Persona;  // ID de la persona relacionada (opcional)
}
