import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuardGuard implements CanActivate {
  constructor(private reflector:Reflector){ }
  // logica de activación de guardas, por medio de un contexto HTTP
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // por medio del contexto, obtendremos el objeto tipo request, en su primer argumento  
    const req = context.getArgByIndex(0);
    // obtenemos el atributo rol del usuario autentificado por medio del request
    const { roles } = req.user;
    
    // console.log("________",roles,"________"); 
    
    // ahora se obtiene la lista con el/los rol(es) permitidos según se esteblace en el decorador personalizado @Rol()
    const getRol= this.reflector.get<string[]>('rol', context.getHandler());
    // definimos un objeto "isAllowed" donde se compara los roles del usuario desde la base de datos, con el/los rol(es) establecidos en el paso anterior
    const isAllowed = roles.some((roles) => getRol.includes(roles));
    // el retorno de este objeto nos retorna true o false, según la validación del decorador y el rol del usuario coincidan
    return isAllowed;
  }
}
