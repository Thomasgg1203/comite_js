import { PartialType } from '@nestjs/mapped-types';
import { CreateNumeraleDto } from './create-numerale.dto';

export class UpdateNumeraleDto extends PartialType(CreateNumeraleDto) {}
