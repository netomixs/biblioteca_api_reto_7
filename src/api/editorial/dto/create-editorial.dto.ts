import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEditorialDto {
    @ApiProperty({ description: 'Nombre de la editorial', required: true })   
    @IsString()
    @IsNotEmpty()
    nombre: string;  // Nombre de la editorial
    @ApiProperty({ description: 'Pais de donde es la editorial', required: true })  
    @IsString() 
    @IsNotEmpty()
    pais: string;  // País de la editorial
}
