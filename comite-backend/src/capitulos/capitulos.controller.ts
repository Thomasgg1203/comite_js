import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapitulosService } from './capitulos.service';
import { CreateCapituloDto } from './dto/create-capitulo.dto';
import { UpdateCapituloDto } from './dto/update-capitulo.dto';

@Controller('capitulos')
export class CapitulosController {
  constructor(private readonly capitulosService: CapitulosService) {}

  @Post()
  create(@Body() createCapituloDto: CreateCapituloDto) {
    return this.capitulosService.create(createCapituloDto);
  }

  @Get()
  findAll() {
    return this.capitulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capitulosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapituloDto: UpdateCapituloDto) {
    return this.capitulosService.update(+id, updateCapituloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capitulosService.remove(+id);
  }
}
