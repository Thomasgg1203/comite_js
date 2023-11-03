import { PartialType } from '@nestjs/mapped-types';
import { CreateAprendiceDto } from './create-aprendice.dto';

export class UpdateAprendiceDto extends PartialType(CreateAprendiceDto) {}
