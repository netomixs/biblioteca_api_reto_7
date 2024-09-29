import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class UpdatePasswordDto {
 
  @ApiProperty({ description: '', required: true  })
  @IsString()
  password: string;  // La nueva contraseña
}