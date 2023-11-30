import { IsArray, IsNotEmpty, IsString } from "class-validator";
export class CreateSolicitudeDto {
    @IsNotEmpty()
    lugar: string;
    @IsNotEmpty()
    asunto: string;
    
    pruebas: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    documento_aprendices:string[];
}