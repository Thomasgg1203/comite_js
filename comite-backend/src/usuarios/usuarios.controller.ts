import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  // ${baseURL}/usuarios/crear
  @Post('crear')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
  // ${baseURL}/usuarios/obtener
  @Get('obtener')
  findAll() {
    return this.usuariosService.findAll();
  }
  // ${baseURL}/usuarios/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Get('obtener:nombres')
  findOne(@Param('nombres') nombres: string) {
    return this.usuariosService.findOne(nombres);
  }
  // ${baseURL}/usuarios/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  //organizar el metodo actualizar para buscar y actualizar usuario por medio del documento o los nombres y apellidos
  @Patch('actualizar:')
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
  @Delete('eliminar:id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
