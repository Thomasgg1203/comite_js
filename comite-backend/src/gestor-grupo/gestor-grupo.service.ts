import { Injectable } from '@nestjs/common';
import { CreateGestorGrupoDto } from './dto/create-gestor-grupo.dto';
import { UpdateGestorGrupoDto } from './dto/update-gestor-grupo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

@Injectable()
export class GestorGrupoService {
  
  constructor(
    @InjectModel(Usuario.name) private readonly gestorModel: Model<usuarioDocument>
  ){

  }
  // Los metodos con función asincrona se encuentran en uso
  async create(createGestorGrupoDto: CreateGestorGrupoDto) {
    return createGestorGrupoDto;
  }

  async findAllByRole():Promise<usuarioDocument[]> {
    return await this.gestorModel.find({roles: 'gestor-grupo'}).exec();
  }

  async findOne(nombres:string,documento:string,):Promise<usuarioDocument> {
    const usuario = await this.gestorModel.findOne({nombres:nombres, documento:documento, roles:'gestor-grupo'}).exec();
    return usuario;
  }

  update(id: number, updateGestorGrupoDto: UpdateGestorGrupoDto) {
    return `This action updates a #${id} gestorGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestorGrupo`;
  }
}
