import { PartialType } from '@nestjs/swagger';
import { CreateLectorDto } from './create-lector.dto';

export class UpdateLectorDto extends PartialType(CreateLectorDto) {}
