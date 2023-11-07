import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';

@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) {}

  @Post()
  create(@Body() createArticuloDto: CreateArticuloDto) {
    return this.articulosService.create(createArticuloDto);
  }

  @Get('') //localhost:3000/articulos
  getListArticulos() {
    return this.articulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articulosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:UpdateArticuloDto) {
    return this.articulosService.update(id,body)
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articulosService.remove(id);
  }
}
