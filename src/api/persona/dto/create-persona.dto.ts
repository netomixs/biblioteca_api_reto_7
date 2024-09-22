import { IsString, IsNotEmpty, Length, IsOptional, IsDate } from "class-validator";

export class CreatePersonaDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255)
    nombre: string;
  
    @IsString()
    @IsNotEmpty()
    @Length(1, 255)
    apellidoP: string;
  
    @IsString()
    @IsOptional()  // Este campo es opcional
    @Length(0, 255)
    apellidoM?: string;
  
 
    @IsNotEmpty()
    nacimiento: Date;
  
    @IsString()
    @IsNotEmpty()
    @Length(1, 1)  // Restricción de longitud para 1 carácter (e.g., M o F)
    sexo: string;
  }
