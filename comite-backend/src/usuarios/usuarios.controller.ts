import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  @Get('obtener:id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }
  // ${baseURL}/usuarios/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Patch('actualizar:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }
  // ${baseURL}/usuarios/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar:id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
