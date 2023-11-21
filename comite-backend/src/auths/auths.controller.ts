import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import { ingresarUsuarioDto } from './dto/ingresar-usuario.dto ';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}
  // enrrutamiento para metodos de ingreso.
  // @Post('registrar')
  // register(@Body() registrarUsuario : registrarUsuarioDto ){
  //   return this.authsService.registrar(registrarUsuario);
  // }
  @Post('ingresar')//auths/ingresar
  login(@Body() ingresarUsuario : ingresarUsuarioDto ){
    return this.authsService.ingresar(ingresarUsuario);
  }
}
