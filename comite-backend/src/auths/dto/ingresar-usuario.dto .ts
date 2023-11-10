import { IsNotEmpty,Length,IsEmail, MinLength } from "class-validator";
export class ingresarUsuarioDto{
    
    @IsNotEmpty()
    @Length(5,15)
    documento:string;

    @IsNotEmpty()
    @MinLength(10)
    contrasenia:string;
}