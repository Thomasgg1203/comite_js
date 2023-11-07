import { IsNotEmpty,Length,IsEmail, MinLength } from "class-validator";
export class registrarUsuarioDto{
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
    @MinLength(10)
    contrasenia:string;
}