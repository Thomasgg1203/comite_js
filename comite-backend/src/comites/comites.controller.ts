import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { CreateComiteDto } from './dto/create-comite.dto';
import { UpdateComiteDto } from './dto/update-comite.dto';

@Controller('comites')
export class ComitesController {
  constructor(private readonly comitesService: ComitesService) {}

  @Post('crear')
  create(@Body() createComiteDto: CreateComiteDto) {
    const comite = this.comitesService.create(createComiteDto);
    return comite;
  }

  @Get('obtener')
  findAll() {
    return this.comitesService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: string) {
    return this.comitesService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateComiteDto: UpdateComiteDto) {
    return this.comitesService.update(id, updateComiteDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: string) {
    return this.comitesService.remove(id);
  }
}
