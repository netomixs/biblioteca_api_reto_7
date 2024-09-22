import { IsNotEmpty, IsString } from "class-validator";

export class CreateNivelUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;  // El nombre del nivel, requerido
}