import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import { Usuario } from 'src/usuarios/model/usuario.schema';
import { ingresarUsuarioDto } from './dto/ingresar-usuario.dto ';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
@UseGuards(JwtGuardGuard, RoleGuardGuard)
@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}
  // enrrutamiento para metodos de registro e ingreso.  
  // idea para hacer que el registro de usuarios, solo se le permita al administrador del sistema
  @Post('registrar')
  @Rol(['administrador'])
  register(@Body() registrarUsuario : registrarUsuarioDto ){
    return this.authsService.registrar(registrarUsuario);
  }
  @Post('ingresar')//auths/ingresar
  login(@Body() ingresarUsuario : ingresarUsuarioDto ){
    return this.authsService.ingresar(ingresarUsuario);
  }
}
