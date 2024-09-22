import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { NivelUsuario } from "src/api/nivel-usuario/entities/nivel-usuario.entity";
import { Persona } from "src/api/persona/entities/persona.entity";


export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    usuario: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    @Length(5, 5)
    claveEmpleado: string  ;

    @IsNumber()
    @IsNotEmpty()
    persona?: Persona;  // ID de la Persona relacionada

    @IsNumber()
    @IsOptional()
    nivel?: NivelUsuario;  // ID del NivelUsuario (opcional)
}