import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { FichasService } from './fichas.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { Request } from 'express';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
// uso del guard con solo llamar su decorador, brindamos la metadata de los guardas que tenemos definidos
@UseGuards(JwtGuardGuard, RoleGuardGuard)
@Controller('fichas')
export class FichasController {
  constructor(private readonly fichasService: FichasService) {}

  @Post()
  // con el decorador personalizado @Rol vamos a poder establecer que Roles tiene permiso de acceder a determinadas solicitudes
  @Rol(['administrador'])
  create(@Req() req:Request , @Body() createFichaDto: CreateFichaDto) {
    return this.fichasService.create(createFichaDto);
  }

  @Get()
  findAll(@Query() query:string) {
    return this.fichasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaDto: UpdateFichaDto) {
    return this.fichasService.update(+id, updateFichaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichasService.remove(+id);
  }
}
