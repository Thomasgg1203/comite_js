import {IsNotEmpty} from 'class-validator';
export class CreateProgramaDto {
    
    @IsNotEmpty()
    codigo:string;
    
    @IsNotEmpty()
    nombre:string;
    
    @IsNotEmpty()
    nivel_formacion:string;
}
