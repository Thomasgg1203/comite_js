import {IsNotEmpty,Length, IsEmail} from 'class-validator';
export class CreateGestorGrupoDto {
    
    @IsNotEmpty()
    nombres:string;
    
    @IsNotEmpty()
    apellidos:string;
    
    @IsNotEmpty()
    @Length(5,15)
    documento:string;
    
    @IsEmail()
    correo:string;

    @IsNotEmpty()
    @Length(10,15)
    telefono:string;
}
