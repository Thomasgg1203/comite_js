import { IsNotEmpty } from "class-validator";

export class CreateParagrafoDto {
    @IsNotEmpty()
    descripcion: string;
}
