import {IsNotEmpty} from 'class-validator';
export class CreateSolicitudeDto {
       
    @IsNotEmpty()
    creadoPor:string;
    
    @IsNotEmpty()
    creadoEn:string;
    
    @IsNotEmpty()
    lugar: string;

    @IsNotEmpty()
    asunto: string;
}
