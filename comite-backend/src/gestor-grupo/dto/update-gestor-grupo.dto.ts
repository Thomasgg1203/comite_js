import { PartialType } from '@nestjs/mapped-types';
import { CreateGestorGrupoDto } from './create-gestor-grupo.dto';

export class UpdateGestorGrupoDto extends PartialType(CreateGestorGrupoDto) {}
