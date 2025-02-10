import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Length, IsOptional, IsJSON } from "class-validator";
import { Column } from "typeorm";
import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";

export class CreateDeseoDto {
    @ApiProperty({ description: "Descripción del deseo", example: "Quiero viajar a Japón" })
    @IsString()
    deseo: string;
  
    @ApiProperty({ description: "Datos adicionales en formato JSON", required: false, example: { importancia: "Alta" } })
    @IsOptional()
    @IsJSON()
    metadata?: any;
  
}
