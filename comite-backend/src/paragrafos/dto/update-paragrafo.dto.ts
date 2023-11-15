import { PartialType } from '@nestjs/mapped-types';
import { CreateParagrafoDto } from './create-paragrafo.dto';

export class UpdateParagrafoDto extends PartialType(CreateParagrafoDto) {}
