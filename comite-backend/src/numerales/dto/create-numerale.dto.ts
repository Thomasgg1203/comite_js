import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class CreateNumeraleDto {
    
    @IsNotEmpty()
    descripcion: string;
}
