import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParagrafosService } from './paragrafos.service';
import { CreateParagrafoDto } from './dto/create-paragrafo.dto';
import { UpdateParagrafoDto } from './dto/update-paragrafo.dto';

@Controller('paragrafos')
export class ParagrafosController {
  constructor(private readonly paragrafosService: ParagrafosService) {}

  @Post()
  create(@Body() createParagrafoDto: CreateParagrafoDto) {
    return this.paragrafosService.create(createParagrafoDto);
  }

  @Get()
  findAll() {
    return this.paragrafosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paragrafosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParagrafoDto: UpdateParagrafoDto) {
    return this.paragrafosService.update(id, updateParagrafoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paragrafosService.remove(id);
  }
}
