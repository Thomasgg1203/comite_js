import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { CreateComiteDto } from './dto/create-comite.dto';
import { UpdateComiteDto } from './dto/update-comite.dto';

@Controller('comites')
export class ComitesController {
  constructor(private readonly comitesService: ComitesService) {}

  @Post()
  create(@Body() createComiteDto: CreateComiteDto) {
    return this.comitesService.create(createComiteDto);
  }

  @Get()
  findAll() {
    return this.comitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComiteDto: UpdateComiteDto) {
    return this.comitesService.update(+id, updateComiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comitesService.remove(+id);
  }
}
