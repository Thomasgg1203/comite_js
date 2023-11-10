import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestorGrupoService } from './gestor-grupo.service';
import { CreateGestorGrupoDto } from './dto/create-gestor-grupo.dto';
import { UpdateGestorGrupoDto } from './dto/update-gestor-grupo.dto';

@Controller('gestor-grupo')
export class GestorGrupoController {
  constructor(private readonly gestorGrupoService: GestorGrupoService) {}

  // retirar metodos 'POST' para centrarlo al Usuario
  // @Post()
  // create(@Body() createGestorGrupoDto: CreateGestorGrupoDto) {
  //   return this.gestorGrupoService.create(createGestorGrupoDto);
  // }

  // @Get()
  // findAllTypeRole(@Param('rol')) {
  //   return this.gestorGrupoService.findAll();

  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestorGrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestorGrupoDto: UpdateGestorGrupoDto) {
    return this.gestorGrupoService.update(+id, updateGestorGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestorGrupoService.remove(+id);
  }
}
