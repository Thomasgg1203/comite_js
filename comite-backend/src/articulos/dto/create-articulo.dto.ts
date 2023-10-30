import { IsNotEmpty } from "class-validator";

export class CreateArticuloDto {
    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    paragrafo: string;
}
