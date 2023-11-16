import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import { Usuario } from 'src/usuarios/model/usuario.schema';
import { ingresarUsuarioDto } from './dto/ingresar-usuario.dto ';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}
  // enrrutamiento para metodos de registro e ingreso.  
  @Post('registrar')
  register(@Body() registrarUsuario : registrarUsuarioDto ){
    return this.authsService.registrar(registrarUsuario);
  }
  @Post('ingresar')//auths/ingresar
  login(@Body() ingresarUsuario : ingresarUsuarioDto ){
    return this.authsService.ingresar(ingresarUsuario);
  }
}
