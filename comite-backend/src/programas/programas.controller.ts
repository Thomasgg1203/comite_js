import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
// uso del guard con solo llamar su decorador, brindamos la metadata de los guardas que tenemos definidos
@UseGuards(JwtGuardGuard, RoleGuardGuard)
@Controller('programas')
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}
  // ${baseURL}/programas/crear
  @Post('crear')
  @Rol(['administrador','gestor-grupo','gestor-comite'])
  @HttpCode(201)
  create(@Body() createPrograma: CreateProgramaDto) {
    return this.programasService.create(createPrograma);
  }
  // ${baseURL}/programas/obtener
  @Get('obtener')
  @Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  findAll() {
    return this.programasService.findAll();
  }
  // ${baseURL}/programas/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Get('obtener/:id')
  @Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  findOne(@Param('id') id: string) {
    const programa = this.programasService.findOne(id);
    return programa;
  }
  // ${baseURL}/programas/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Patch('actualizar:/id')
  @Rol(['administrador','gestor-grupo','gestor-comite'])
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programasService.update(id, updateProgramaDto);
  }
  // ${baseURL}/programas/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar:/id')
  @Rol(['administrador','gestor-grupo','gestor-comite'])
  remove(@Param('id') id: string) {
    return this.programasService.remove(id);
  }
}
