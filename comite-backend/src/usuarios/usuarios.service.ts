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

  async update(updateUsuarioDto:UpdateUsuarioDto, documento:string,[nombres,apellidos]:string) {
    return this.usuarioModel.findOneAndUpdate({documento},{
      upsert:true,
      new: true
    });
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
/*
Idea para socializar con Thom y Mono
async actualizarPorDocumento(documento: string, datosActualizados: Partial<UpdateUsuarioDto>): Promise<Usuario> {
  const usuario = await this.usuarioModel.findOne({ documento });

  if (!usuario) {
    throw new NotFoundException('Usuario no encontrado');
  }

  Object.assign(usuario, datosActualizados);

  return usuario.save();
}

async actualizarPorNombreApellido(nombres: string, apellidos: string, datosActualizados: Partial<UpdateUsuarioDto>): Promise<Usuario> {
  const usuario = await this.usuarioModel.findOne({ nombres, apellidos });

  if (!usuario) {
    throw new NotFoundException('Usuario no encontrado');
  }

  Object.assign(usuario, datosActualizados);

  return usuario.save();
}
 */
