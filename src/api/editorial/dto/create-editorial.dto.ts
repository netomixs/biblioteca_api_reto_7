import { IsNotEmpty, IsString } from "class-validator";

export class CreateEditorialDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;  // Nombre de la editorial

    @IsString() 
    @IsNotEmpty()
    pais: string;  // País de la editorial
}
