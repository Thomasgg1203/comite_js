import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObservacionesService } from './observaciones.service';
import { CreateObservacioneDto } from './dto/create-observacione.dto';
import { UpdateObservacioneDto } from './dto/update-observacione.dto';
// Si quieres tener Jwt y roles, te dejo comentado lo que requieres para ello
// @UseGuards(JwtGuardGuard, RoleGuardGuard)
@Controller('observaciones')
export class ObservacionesController {
  constructor(private readonly observacionesService: ObservacionesService) {}

  // ${baseURL}/observaciones/crear
  @Post('crear')
  //Y cualquier cosa, aquí esta el bloque para asiganr roles
  //@Rol(['administrador','aprendiz','gestor-grupo','gestor-comite']) 
  create(@Body() createObservacioneDto: CreateObservacioneDto) {
    const observaciones = this.observacionesService.create(createObservacioneDto);
    return observaciones;
  }
   // ${baseURL}/observaciones/obtener
  @Get('obtener')
  //Y cualquier cosa, aquí esta el bloque para asiganr roles
  //@Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  findAll() {
    return this.observacionesService.findAll();
  }

  @Patch('actualizar/:id')
  //Y cualquier cosa, aquí esta el bloque para asiganr roles
  //@Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  update(@Param('id') id: string, @Body() updateObservacioneDto: UpdateObservacioneDto) {
    return this.observacionesService.update(id, updateObservacioneDto);
  }

  @Delete('eliminar/:id')
  //Y cualquier cosa, aquí esta el bloque para asiganr roles
  //@Rol(['administrador','aprendiz','gestor-grupo','gestor-comite'])
  remove(@Param('id') id: string) {
    return this.observacionesService.remove(id);
  }
}
