import { IsDate, IsDateString, IsEmail, IsNotEmpty, isEmail, isNotEmpty } from "class-validator";

export class CreateAprendiceDto {

    @IsNotEmpty()
    nombres: string;

    @IsNotEmpty()
    apellidos: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    documento: string;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    direccion: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_nacimiento: Date;
}
