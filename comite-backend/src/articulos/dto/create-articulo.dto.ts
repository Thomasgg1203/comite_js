import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class CreateArticuloDto {
    @IsNotEmpty()
    @IsUUID()
    idCapitulo: string;
    
    @IsOptional()
    @IsUUID()
    idParagrafo: string;

    @IsNotEmpty()
    articulo: string;

    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descripcion: string;

}
