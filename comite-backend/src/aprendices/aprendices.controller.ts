import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { CreateAprendizDto } from 'src/usuarios/dto/create-usuario.dto';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';

@UseGuards(JwtGuardGuard,RoleGuardGuard)
@Controller('aprendices')
export class AprendicesController {
  constructor(private readonly aprendicesService: AprendicesService) {}
  @Post('crear')
  @Rol(['administrador','gestor-comite','gestor-grupo'])
  create(@Body() crearAprendiz:CreateAprendizDto) {
    const aprendiz = this.aprendicesService.createAprendiz(crearAprendiz)
    return aprendiz;
  }

  @Get('obtener')
  @Rol(['administrador','gestor-comite','gestor-grupo'])
  findAll() {
    return this.aprendicesService.findAll();
  }

  @Get('obtener/:documento')
  @Rol(['administrador','gestor-comite','gestor-grupo'])
  findOne(documento: string) {
    return this.aprendicesService.findOne(documento);
  }

  @Patch(':id')
  @Rol(['administrador','gestor-comite','gestor-grupo'])
  update(@Param('id') id: string, @Body() updateAprendiceDto: UpdateAprendiceDto) {
    return this.aprendicesService.update(id, updateAprendiceDto);
  }

  @Delete(':id')
  @Rol(['administrador','gestor-comite','gestor-grupo'])
  remove(@Param('id') id: string) {
    return this.aprendicesService.remove(id);
  }
}
