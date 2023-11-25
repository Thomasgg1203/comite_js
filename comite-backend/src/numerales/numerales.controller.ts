import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NumeralesService } from './numerales.service';
import { CreateNumeraleDto } from './dto/create-numerale.dto';
import { UpdateNumeraleDto } from './dto/update-numerale.dto';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
UseGuards(JwtGuardGuard,RoleGuardGuard)
@Rol(["administrador","gestor-comite","gestor-grupo"])
@Controller('numerales')
export class NumeralesController {
  constructor(private readonly numeralesService: NumeralesService) {}

  @Post('crear')
  create(@Body() createNumeraleDto: CreateNumeraleDto) {
    return this.numeralesService.create(createNumeraleDto);
  }

  @Get('obtener')
  getListNumerales() {
    return this.numeralesService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: string) {
    return this.numeralesService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateNumeraleDto: UpdateNumeraleDto) {
    return this.numeralesService.update(id, updateNumeraleDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: string) {
    return this.numeralesService.remove(id);
  }
}
