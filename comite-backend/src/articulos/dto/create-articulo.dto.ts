import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateArticuloDto {
    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    @IsUUID()
    idParagrafo: string;
}
