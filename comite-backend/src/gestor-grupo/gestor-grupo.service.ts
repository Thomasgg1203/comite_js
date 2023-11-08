import { Injectable } from '@nestjs/common';
import { CreateGestorGrupoDto } from './dto/create-gestor-grupo.dto';
import { UpdateGestorGrupoDto } from './dto/update-gestor-grupo.dto';
import { GestorGrupo, gestorGrupoDocument } from './model/gestor-grupo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GestorGrupoService {
  
  constructor(
    @InjectModel(GestorGrupo.name) private readonly gestorGrupoModel: Model<gestorGrupoDocument>
  ){

  }
  // Los metodos con función asincrona se encuentran en uso
  async create(createGestorGrupoDto: CreateGestorGrupoDto) {
    return createGestorGrupoDto;
  }

  async findAll() {
    return this.gestorGrupoModel.find(CreateGestorGrupoDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} gestorGrupo`;
  }

  update(id: number, updateGestorGrupoDto: UpdateGestorGrupoDto) {
    return `This action updates a #${id} gestorGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestorGrupo`;
  }
}
