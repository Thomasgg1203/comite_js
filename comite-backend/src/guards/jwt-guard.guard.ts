import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuardGuard extends AuthGuard ('jwt'){
  // este guardia nos estructura aún más los procesos entre validación y chequeo de tokens por medio de passport(libreria) 
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
