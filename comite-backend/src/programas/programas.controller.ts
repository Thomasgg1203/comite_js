import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
// uso del guard con solo llamar su decorador, brindamos la metadata de los guardas que tenemos definidos
@UseGuards(JwtGuardGuard, RoleGuardGuard)
@Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
@Controller('programas')
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}
  // ${baseURL}/programas/crear
  @Post('crear')
  @HttpCode(201)
  create(@Body() createPrograma: CreateProgramaDto) {
    return this.programasService.create(createPrograma);
  }
  // ${baseURL}/programas/obtener
  @Get('obtener')
  findAll() {
    return this.programasService.findAll();
  }
  // ${baseURL}/programas/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Get('obtener:id')
  findOne(@Param('id') id: string) {
    return this.programasService.findOne(+id);
  }
  // ${baseURL}/programas/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Patch('actualizar:id')
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programasService.update(+id, updateProgramaDto);
  }
  // ${baseURL}/programas/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar:id')
  remove(@Param('id') id: string) {
    return this.programasService.remove(id);
  }
}
