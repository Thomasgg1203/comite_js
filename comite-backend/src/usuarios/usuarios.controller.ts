import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthsService } from 'src/auths/auths.service';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
@UseGuards(JwtGuardGuard,RoleGuardGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  // ${baseURL}/usuarios/crear
  @Post('crear')
  @Rol(['administrador'])//solo el administrador puede crear usuarios
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.registrar(createUsuarioDto);
  }
  // ${baseURL}/usuarios/obtener
  @Get('obtener')
  findAll() {
    return this.usuariosService.findAll();
  }
  // ${baseURL}/usuarios/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento)
  @Get('obtener/:documento')
  findOne(@Param('documento') documento: string) {
    return this.usuariosService.findOne(documento);
  }
  // ${baseURL}/usuarios/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  //organizar el metodo actualizar para buscar y actualizar usuario por medio del documento o los nombres y apellidos
  @Patch('actualizar/:documento')
  update(@Param() @Body() body: Partial<UpdateUsuarioDto>) {
    if (body.documento) {
      return /*this.usuariosService.actualizarPorDocumento(body.documento, body);*/
    } else if (body.nombres && body.apellidos) {
      return /*this.usuariosService.actualizarPorNombreApellido(body.nombres, body.apellidos, body);*/
    } else {
      throw new BadRequestException('Se requiere proporcionar documento o nombre y apellido');
    }
  }
  // ${baseURL}/usuarios/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar/:documento')
  eliminar(@Param('documento') documento: string) {
    return this.usuariosService.remove(documento);
  }
}
