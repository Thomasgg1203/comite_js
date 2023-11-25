import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, usuarioDocument } from './model/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainTextToHash } from 'src/auths/utils/handlerBcrypts';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>){

  }
  public async registrar(createUsuario: CreateUsuarioDto) {
    // des-estructuración de objetos JS, definiendo variables que contienen los atributos propios de un obj.Javascript especifico
    const {contrasenia, ...usuario}=createUsuario;
    // luego en un nuevo objeto, asignamos los valores de la variable 'usuario' y 'contrasenia' desestructurados
    const authUsuario = {...usuario, contrasenia:
      //  pero, 'contrasenia' la transformamos por medio de la funcion plainTextToHash para encriptarla
      await plainTextToHash(contrasenia)   
    }
    // retornamos este nuevo objeto que tiene el atributo 'contrasenia' encriptada.
    return await this.usuarioModel.create(authUsuario);
  }

  async findAll() {
    return await this.usuarioModel.find();
  }

  async findOne(nombres:string,documento?:string) {
    const usuario = await this.usuarioModel.findOne({nombres:nombres, documento:documento,});
    return await usuario;
  }

  async update(updateUsuarioDto:UpdateUsuarioDto, documento:string) {
    return await this.usuarioModel.findOneAndUpdate(
      { documento },
      updateUsuarioDto,
      {
        upsert:true,
        new: true
      }
    );
  }

  async remove(documento:string):Promise<any> {
    return await this.usuarioModel.deleteOne({documento});
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
