import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';

@Injectable()
export class AuthsService {
    constructor(
        @InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>
    ){}

    public registrar(usuario:registrarUsuarioDto){
        return this.usuarioModel.create(usuario);
    }
}
