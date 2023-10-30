import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import { Usuario } from 'src/usuarios/model/usuario.schema';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('registrar')
  register(@Body() registrarUsuario : registrarUsuarioDto ){
    return this.authsService.registrar(registrarUsuario);
  }
  @Post('ingresar')
  login(@Body() registrarUsuarioDto : registrarUsuarioDto ){

  }
}
