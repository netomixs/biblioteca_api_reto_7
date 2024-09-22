import { IsNotEmpty, IsString, Length } from "class-validator";
import { LessThan } from "typeorm";

export class CreateGeneroDto {

    @IsString()
    @IsNotEmpty()
    @Length(3,3)
    codigo: string;  // Código de género

    @IsString()
    @IsNotEmpty()
    @Length(3,250)
    nombre: string;  // Nombre del género
}
