import { IsNotEmpty,Length,IsEmail, MinLength, IsDateString, IsMongoId } from "class-validator";
export class CreateUsuarioDto {
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

    @IsNotEmpty()
    @MinLength(10)
    contrasenia:string;
    
    @IsNotEmpty()
    direccion: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_nacimiento: Date;
}
export class CreateAprendizDto extends CreateUsuarioDto {
    @IsNotEmpty()
    numero_ficha:string;
}
