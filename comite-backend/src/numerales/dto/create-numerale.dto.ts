import { IsNotEmpty } from "class-validator";

export class CreateNumeraleDto {
    @IsNotEmpty()
    descripcion: string;
}
