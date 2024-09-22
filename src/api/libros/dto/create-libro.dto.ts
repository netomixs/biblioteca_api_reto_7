import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Autor } from "src/api/autor/entities/autor.entity";
import { Editorial } from "src/api/editorial/entities/editorial.entity";
import { Genero } from "src/api/genero/entities/genero.entity";

export class  CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  @Length(18,18)
  ISBN: string;

  @IsString()
  @IsNotEmpty()
  Titulo: string;

  @IsDateString()
  @IsNotEmpty()
  Fecha_Publicacion: string;

  @IsDateString()
  @IsNotEmpty()
  Fecha_Adquicicion: string;

  @IsNumber()
  @IsNotEmpty()
  Existencias: number;

  @IsBoolean()
  @IsNotEmpty()
  Es_Prestable: boolean;

  @IsString()
  @IsNotEmpty()
  Codigo: string;

  @IsOptional()
  autores?: Autor[];  // IDs de autores

  @IsOptional()
  generos?: Genero[];  // IDs de géneros

  @IsOptional()
  editorial?: Editorial;  // ID de la editorial 
  }