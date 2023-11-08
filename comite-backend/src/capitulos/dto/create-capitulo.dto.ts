import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateCapituloDto {
    @IsNotEmpty()
    capitulo: string;

    @IsNotEmpty()
    titulo: string;
    
}