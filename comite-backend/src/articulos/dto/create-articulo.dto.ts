import { IsNotEmpty, IsOptional, IsUUID, ArrayUnique } from "class-validator";

export class CreateArticuloDto {
    @IsNotEmpty()
    @IsUUID()
    idCapitulo: string;
    
    @IsOptional()
    @IsUUID()
    idParagrafo: string;

    @IsOptional()
    @ArrayUnique()
    @IsUUID(undefined, { each: true })
    idNumeral: string[];

    @IsNotEmpty()
    articulo: string;

    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descripcion: string;
}
