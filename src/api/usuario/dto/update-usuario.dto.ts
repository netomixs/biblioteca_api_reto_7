import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsOptional, IsDate, IsNumber, IsNotEmpty } from 'class-validator';
import { NivelUsuario } from 'src/api/nivel-usuario/entities/nivel-usuario.entity';
import { Persona } from 'src/api/persona/entities/persona.entity';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
 
 
}
 

