import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObservacionesService } from './observaciones.service';
import { CreateObservacioneDto } from './dto/create-observacione.dto';
import { UpdateObservacioneDto } from './dto/update-observacione.dto';

@Controller('observaciones')
export class ObservacionesController {
  constructor(private readonly observacionesService: ObservacionesService) {}

  @Post('crear')
  create(@Body() createObservacioneDto: CreateObservacioneDto) {
    const observaciones = this.observacionesService.create(createObservacioneDto);
    return observaciones;
  }

  @Get('obtener')
  findAll() {
    return this.observacionesService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: string) {
    return this.observacionesService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateObservacioneDto: UpdateObservacioneDto) {
    return this.observacionesService.update(id, updateObservacioneDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: string) {
    return this.observacionesService.remove(id);
  }
}
