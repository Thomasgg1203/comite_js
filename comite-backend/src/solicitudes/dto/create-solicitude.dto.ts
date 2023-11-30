import { IsNotEmpty } from "class-validator";

export class CreateSolicitudeDto {
    @IsNotEmpty()
    lugar: string;
    @IsNotEmpty()
    asunto: string;
    @IsNotEmpty()
    pruebas: string;
}
