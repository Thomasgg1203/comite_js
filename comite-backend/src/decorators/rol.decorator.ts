import { SetMetadata } from '@nestjs/common';
// la funcion de establecer metadata 'SetMetadata', nos permite customizar un decorador y permitir que tipo de argumentos obtendra
// en este caso, obtendremos el tipo de rol de nuestro objeto user, por medio de un decorador personalizado llamado @Rol 
export const Rol = (args: string[]) => SetMetadata('rol', args);