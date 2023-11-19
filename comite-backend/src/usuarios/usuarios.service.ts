import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, usuarioDocument } from './model/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>){

  }
  async create(createUsuario: CreateUsuarioDto) {
    return await this.usuarioModel.create(createUsuario);
  }

  async findAll() {
    return await this.usuarioModel.find();
  }

  async findOne(nombres:string,documento?:string) {
    const usuario = await this.usuarioModel.findOne({nombres:nombres, documento:documento,});
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
