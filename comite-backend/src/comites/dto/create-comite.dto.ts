import { IsNotEmpty } from "class-validator";

export class CreateComiteDto {

    @IsNotEmpty()  
    nombre: string;
    
    @IsNotEmpty()
    fecha_inicio: string;

    @IsNotEmpty()
    objetivo_reunion: string;

    @IsNotEmpty()
    lugar: string;

    @IsNotEmpty()
    detalles: string;

    @IsNotEmpty()
    nombre_aprendiz: string;
}

