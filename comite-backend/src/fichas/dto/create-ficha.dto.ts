import {IsNotEmpty,Length, ValidateIf, IsDate, IsDateString} from 'class-validator';
export class CreateFichaDto {
    @IsNotEmpty()
    @ValidateIf((object,value) => value != undefined)
    @Length(6,10, {message:'el campo debe tener, un minimo de 6 a 10 caracteres.'})
    numero_ficha:string;

    @IsDateString()
    fecha_inicio_lectiva:Date;
    @IsDateString()
    fecha_fin_lectiva:Date;
    @IsDateString()
    fecha_inicio_productiva:Date;
    @IsDateString()
    fecha_fin_productiva:Date;
    
    @IsNotEmpty()
    @ValidateIf((object,value) => value != undefined)
    @Length(7,10, {message:'el campo debe tener, un minimo de 7 a 10 caracteres.'})
    modalidad:string;

    @IsNotEmpty()
    jornada:string;
}
