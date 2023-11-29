import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { FichasService } from './fichas.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Request } from 'express';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
// uso del guard con solo llamar su decorador, brindamos la metadata de los guardas que tenemos definidos
@UseGuards(JwtGuardGuard, RoleGuardGuard)
@Controller('fichas')
export class FichasController {
  constructor(private readonly fichasService: FichasService) {}
  
  // ${baseURL}/fichas/crear
  @Post('crear')
  // con el decorador personalizado @Rol vamos a poder establecer que Roles tiene permiso de acceder a determinadas solicitudes
  @Rol(['administrador', 'gestor-grupo'])
  create(@Req() req:Request , @Body() createFichaDto: CreateFichaDto) {
    return this.fichasService.create(createFichaDto);
  }

  // ${baseURL}/fichas/obtener
  @Get('obtener')
  @Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  findAll(@Query() query:string) {
    return this.fichasService.findAll();
  }

  // ${baseURL}/fichas/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Get('obtener/:numero_ficha')
  @Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  findOne(@Param('numero_ficha') numero_ficha: string) {
    return this.fichasService.findOne(numero_ficha);
  }

  // ${baseURL}/fichas/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Patch('actualizar:id')
  @Rol(['administrador','gestor-grupo'])
  update(@Param('id') id: string, @Body() updateFichaDto: UpdateFichaDto) {
    return this.fichasService.update(+id, updateFichaDto);
  }

  // ${baseURL}/fichas/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar:id')
  @Rol(['administrador','gestor-grupo'])
  remove(@Param('id') id: string) {
    return this.fichasService.remove(+id);
  }
}
