import { PartialType } from '@nestjs/swagger';
import { CreateDeseoDto } from './create-deseo.dto';

export class UpdateDeseoDto extends PartialType(CreateDeseoDto) {}
