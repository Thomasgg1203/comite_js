import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudeDto } from './create-solicitude.dto';
import { IsBoolean } from 'class-validator';

export class UpdateSolicitudeDto extends PartialType(CreateSolicitudeDto) {
    
    @IsBoolean()
    estado_solicitud: boolean;

}
