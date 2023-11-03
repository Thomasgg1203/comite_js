import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { CreateAprendiceDto } from './dto/create-aprendice.dto';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';

@Controller('aprendices')
export class AprendicesController {
  constructor(private readonly aprendicesService: AprendicesService) {}

  @Post()
  create(@Body() createAprendiceDto: CreateAprendiceDto) {
    return this.aprendicesService.create(createAprendiceDto);
  }

  @Get()
  findAll() {
    return this.aprendicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aprendicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAprendiceDto: UpdateAprendiceDto) {
    return this.aprendicesService.update(+id, updateAprendiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aprendicesService.remove(+id);
  }
}
