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
  @Rol(['administrador'])
  create(@Req() req:Request , @Body() createFichaDto: CreateFichaDto) {
    return this.fichasService.create(createFichaDto);
  }
  // ${baseURL}/fichas/obtener
  @Get('obtener')
  findAll(@Query() query:string) {
    return this.fichasService.findAll();
  }
  // ${baseURL}/fichas/obtener:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Get('obtener:id')
  findOne(@Param('id') id: string) {
    return this.fichasService.findOne(+id);
  }
  // ${baseURL}/fichas/actualizar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Patch('actualizar:id')
  update(@Param('id') id: string, @Body() updateFichaDto: UpdateFichaDto) {
    return this.fichasService.update(+id, updateFichaDto);
  }
  // ${baseURL}/fichas/eliminar:id?(_TODO_:aquí literal es el id, pero cambiara para obtener por medio de documento o usuario)
  @Delete('eliminar:id')
  remove(@Param('id') id: string) {
    return this.fichasService.remove(+id);
  }
}
