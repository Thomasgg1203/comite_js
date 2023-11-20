import { PartialType } from '@nestjs/mapped-types';
import { CreateGestorComiteDto } from './create-gestor-comite.dto';

export class UpdateGestorComiteDto extends PartialType(CreateGestorComiteDto) {}
