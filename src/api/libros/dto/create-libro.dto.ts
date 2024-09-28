import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Autor } from "src/api/autor/entities/autor.entity";
import { Editorial } from "src/api/editorial/entities/editorial.entity";
import { Genero } from "src/api/genero/entities/genero.entity";

export class  CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  @Length(18,18)
  @ApiProperty({ description: 'ISBN del libro', required: true })   
  ISBN: string;
  @ApiProperty({ description: 'Titulo del libro', required: true })   
  @IsString()
  @IsNotEmpty()
  Titulo: string;
  @ApiProperty({ description: 'Fecha de lanzamiento del libro', required: true })   
  @IsDateString()
  @IsNotEmpty()
  Fecha_Publicacion: string;
  @ApiProperty({ description: 'Fecha de compra o llegada del libro', required: true })   
  @IsDateString()
  @IsNotEmpty()
  Fecha_Adquicicion: string;
  @ApiProperty({ description: 'Cantidad de libros propiedad de la biblioteca', required: true })   
  @IsNumber()
  @IsNotEmpty()
  Existencias: number;
  @ApiProperty({ description: 'El libro puede ser prestado', required: true })   
  @IsBoolean()
  @IsNotEmpty()
  Es_Prestable: boolean;
  @ApiProperty({ description: 'Codigo de identificacion dentro de la biblioteca', required: true })   
  @IsString()
  @IsNotEmpty()
  Codigo: string;
  
  @ApiProperty({ description: 'Id del autor relacionado con el libro', required: false, })  
  @IsOptional()
  autores?: Autor[];  

  @ApiProperty({ description: 'Id de los generos del libro', required: false  })  
  @IsOptional()
  generos?: Genero[];  

  @ApiProperty({ description: 'Id de la editorial relacionado con el libro', required: false})  
  @IsOptional()
  editorial?: Editorial;   
  }