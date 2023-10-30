import {IsNotEmpty,Length, ValidateIf, IsDate} from 'class-validator';
export class CreateFichaDto {
    @IsNotEmpty()
    @ValidateIf((object,value) => value != undefined)
    @Length(6,10, {message:'el campo debe tener, un minimo de 6 a 10 caracteres.'})
    numero_ficha:string;

    @IsDate()
    fecha_inicio_lectiva:Date;
    @IsDate()
    fecha_fin_lectiva:Date;
    @IsDate()
    fecha_inicio_productiva:Date;
    @IsDate()
    fecha_fin_productiva:Date;
    
    @IsNotEmpty()
    @ValidateIf((object,value) => value != undefined)
    @Length(7,10, {message:'el campo debe tener, un minimo de 7 a 10 caracteres.'})
    modalidad:string;

    @IsNotEmpty()
    jornada:string;
}
