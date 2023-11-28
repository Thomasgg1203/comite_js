import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards, Request } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.handle';
import { JwtGuardGuard } from 'src/guards/jwt-guard.guard';
import { RoleGuardGuard } from 'src/guards/role-guard.guard';
import { Rol } from 'src/decorators/rol.decorator';
UseGuards(JwtGuardGuard,RoleGuardGuard)
@Rol(['administrador','gestor-grupo','gestor-comite'])
@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Post('crear')
  create(@Body() createSolicitudeDto: CreateSolicitudeDto, @Request() req) {
    return this.solicitudesService.create(createSolicitudeDto, req);
  }

  @Get('obtener')
  findAll() {
    return this.solicitudesService.findAll();
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('pruebas',{storage}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  }

  @Get('obtener:id')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(+id);
  }

  @Patch('actualizar:id')
  update(@Param('id') id: string, @Body() updateSolicitudeDto: UpdateSolicitudeDto) {
    return this.solicitudesService.update(+id, updateSolicitudeDto);
  }

  @Delete('eliminar:id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(+id);
  }
}
