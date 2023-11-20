import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestorComiteService } from './gestor-comite.service';
import { CreateGestorComiteDto } from './dto/create-gestor-comite.dto';
import { UpdateGestorComiteDto } from './dto/update-gestor-comite.dto';

@Controller('gestor-comite')
export class GestorComiteController {
  constructor(private readonly gestorComiteService: GestorComiteService) {}

  @Post()
  create(@Body() createGestorComiteDto: CreateGestorComiteDto) {
    return this.gestorComiteService.create(createGestorComiteDto);
  }

  @Get()
  findAll() {
    return this.gestorComiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestorComiteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestorComiteDto: UpdateGestorComiteDto) {
    return this.gestorComiteService.update(+id, updateGestorComiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestorComiteService.remove(+id);
  }
}
