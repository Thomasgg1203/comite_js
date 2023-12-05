import { IsNotEmpty } from "class-validator";

export class CreateObservacioneDto {
    
    @IsNotEmpty()
    detalles: string;
    
    @IsNotEmpty()
    documento_aprendiz: string;
}
