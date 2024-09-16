import { PartialType } from '@nestjs/swagger';
import { CreateNivelUsuarioDto } from './create-nivel-usuario.dto';

export class UpdateNivelUsuarioDto extends PartialType(CreateNivelUsuarioDto) {}
