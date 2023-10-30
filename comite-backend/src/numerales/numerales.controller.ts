import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumeralesService } from './numerales.service';
import { CreateNumeraleDto } from './dto/create-numerale.dto';
import { UpdateNumeraleDto } from './dto/update-numerale.dto';

@Controller('numerales')
export class NumeralesController {
  constructor(private readonly numeralesService: NumeralesService) {}

  @Post()
  create(@Body() createNumeraleDto: CreateNumeraleDto) {
    return this.numeralesService.create(createNumeraleDto);
  }

  @Get()
  findAll() {
    return this.numeralesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numeralesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumeraleDto: UpdateNumeraleDto) {
    return this.numeralesService.update(+id, updateNumeraleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeralesService.remove(+id);
  }
}
